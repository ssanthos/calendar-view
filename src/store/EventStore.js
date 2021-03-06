import lovefield from "lovefield";

import { EVENTS } from "./stubEventData";

/**
 * The Event store abstraction over the data store.
 * This will be exposed as a singleton to the rest of the app.
 *
 */
class EventStore {
  constructor() {
    try {
      this.dbPromise = this.initStore_();
    } catch (err) {
      console.error(err);
    }
  }
  /** Public API */
  async getAllEvents() {
    const db = await this.dbPromise;
    const eventTable = getEventTable(db);
    return await db
      .select()
      .from(eventTable)
      .orderBy(eventTable.start, lovefield.Order.ASC)
      .exec();
  }
  async getAllEventsBetween(startDate, endDate) {
    const db = await this.dbPromise;
    const eventTable = getEventTable(db);
    return await db
      .select()
      .from(eventTable)
      .where(
        lovefield.op.and(
          eventTable.start.gte(startDate),
          eventTable.start.lt(endDate)
        )
      )
      .orderBy(eventTable.start, lovefield.Order.ASC)
      .exec();
  }
  /** Private methods */
  async initStore_() {
    const schemaBuilder = lovefield.schema.create("calendar-view", 1);

    schemaBuilder
      .createTable("Event")
      .addColumn("id", lovefield.Type.INTEGER)
      .addColumn("title", lovefield.Type.STRING)
      .addColumn("start", lovefield.Type.DATE_TIME)
      .addColumn("duration", lovefield.Type.INTEGER)
      .addPrimaryKey(["id"], true)
      .addIndex("idxStart", ["start"], false, lovefield.Order.ASC);

    const db = await schemaBuilder.connect({
      storeType: lovefield.schema.DataStoreType.MEMORY,
    });
    const eventTable = getEventTable(db);
    const eventRows = EVENTS.map((event) => ({
      ...event,
      ...{ start: new Date(event.start) },
    })).map((event) => getEventTable(db).createRow(event));
    await db.insert().into(eventTable).values(eventRows).exec();
    return db;
  }
}

function getEventTable(db) {
  return db.getSchema().table("Event");
}

const store = new EventStore();

export default store;
