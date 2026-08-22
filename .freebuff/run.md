# Run Doc — Hexa (Next.js)

## Reproduce uncommitted artifacts

The workspace is the primary checkout, so no env file copying is needed.

- Ensure `node_modules/` exists: run `npm install` if missing.
- Ensure `.env.local` exists in the project root with required Supabase/auth keys.

## Run the dev server

```bash
npm run dev
```

This starts Next.js on port 3000 by default. To use a different port:

```bash
npx next dev -p <port>
```

### Windows detached (PowerShell)

```powershell
$p = Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru
Write-Output $p.Id
```

Then confirm: `powershell -NoProfile -Command "Get-Process -Id <pid>"`
