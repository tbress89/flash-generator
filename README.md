# Flash Generator

A static, fully client-side web page that generates a printable schedule ("Flash") of FC Ik Dien's home matches for a selected week, grouped by day and field.

## How it works

`index.html` fetches match data directly from the RBFA (Royal Belgian Football Association) public GraphQL API in the browser:

1. For each configured team, fetch its calendar (`GetTeamCalendar`).
2. Filter matches down to home games (club ID `8175`) within the selected date range, and remove duplicates.
3. For the remaining matches, fetch match details (`GetMatchDetail`) to resolve the field/pitch name.
4. Sort chronologically and render the results as a table, grouped by date and field.

No backend/server is required — everything runs client-side.
