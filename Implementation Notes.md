# Implementation Notes

### What was done

- Code is in React + JS + CSS + Sass (minimally)
- Used Lovefield in-memory database. Added a layer of abstraction on top, which is a bit confusingly named EventStore.
- Basic state management (state at the app level being passed down as props)
- Rendering of the grid with day/date markers on the top, hour markers to the left. Also, each event shows up as a button sized based on the duration of the meeting. Have set a minimum height for the chip so that even very short meetings are readable.
- Haven't used MUI components before much, so used them in conjunction with custom CSS.

### What could have been better

- Redux for state management
- The current date / time doesn't get updated after being initialized, so if the page is open for a day, the 'Today' indicator would be indicated.
- The layout of the grid needs work. It looks fine on desktop, but it's not gonna work well on mobile, especially without horizontal scroll. I haven't worked extensively with grid or flex even, but still went with it to see how far I'd get. Even ended up putting in a hack to align the dividers used in the header with the rest of the grid since the grid usually shows a scrollbar and the header does not.
- Have not optimized for mobile - The top bar spacing, grid headers, event box sizing would need to be overridden with media queries at the very least.
- No smooth transition when switching to previous/next week.
- Did not have time to write unit tests (the date-utils could use some thorough tests)
