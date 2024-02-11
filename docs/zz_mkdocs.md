# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## mkdocs install

### pip

pip install --upgrade pip
pip install mkdocs
pip install mkdocs-material

pip freeze | grep mkdocs

### mkdocs new

mkdocs new test
ll
cd test/
ll
vi mkdocs.yml

```
site_name: memo blog

##Basic Configuration

theme:
 name: material
 palette:
 primary: pink
```

### mkdocs build
mkdocs build
mkdocs serve
mkdocs serve -a 192.168.10.10:8000

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
