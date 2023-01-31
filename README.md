The tool for managing, add, remove, read, notes from note app

Requirements
- node >= 16.10.0
- npm >= 7.24.0

Local dev test commands
 > `npm run build`

## Run notes cli:
> `node dist/note-cli/app.js` `command`
### Commands: 
- Review all notes
  -  `node dist/note-cli/app.js list`
- Add note
    -  `node dist/note-cli/app.js add --title="string" --body="string"`
- Remove note
    -  `node dist/note-cli/app.js remove --title="string"`
- Read note
    -  `node dist/note-cli/app.js read --title="string"`


#TODO:
1. Each command's required param can be asked seperatly, instead of current  way `--tittle="" --body=""`
2. Can export the `notes.json` with some format options, for example: .csv, excel
