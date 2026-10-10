# Session 3: invoice-svc
Benign forensic Git practice for INC-0452. All authors and the vulnerability are fictional teaching props. No malware or vulnerable third-party code is included. Do not install the fictional dependency from npm.

Main deliberately pins the teaching PDF library at 2.3.0. Fork this repository, create a fix branch, change package.json to 2.3.4, and open a PR. Run `python3 scripts/dependency_scan.py` locally. A nonzero exit is expected on main; the fix makes it pass. Tests and lint pass on both versions.

Investigate the library name with the Git pickaxe, `git blame package.json`, and `git diff v1.4 v1.5 -- package.json`. Hashes differ from the slides.

Review lab: use the instructor's open practice PR. Students need their own GitHub accounts; an author cannot approve or request changes on their own PR. Never commit SSH keys or real secrets.


test
