# Flash Generator

A static, fully client-side web page that generates a printable schedule ("Flash") of FC Ik Dien's home matches for a selected week, grouped by day and field.

## How it works

`index.html` fetches match data directly from the RBFA (Royal Belgian Football Association) public GraphQL API in the browser:

1. For each configured team, fetch its calendar (`GetTeamCalendar`).
2. Filter matches down to home games (club ID `8175`) within the selected date range, and remove duplicates.
3. For the remaining matches, fetch match details (`GetMatchDetail`) to resolve the field/pitch name.
4. Sort chronologically and render the results as a table, grouped by date and field.

No backend/server is required — everything runs client-side.

## Local development

Do not open `index.html` directly from the filesystem. A `file://` page has the browser origin `null`, which can produce a different CORS response from the hosted site.

From the repository root, run:

```sh
./serve-local.sh
```

Then open <http://localhost:8000/> in the browser. The helper serves the repository with Python's built-in HTTP server, giving the page the explicit origin `http://localhost:8000`.

This does not bypass RBFA's CORS policy. If RBFA does not allow `http://localhost:8000`, local browser requests still need to use a server-side proxy or RBFA must allow the development origin.
