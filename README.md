# npmpy

A package manager for Python, inspired by npm, designed to simplify the installation and management of Python packages.

## Features

- Simple npm-style commands for Python package management
- Support for requirements.txt
- Built-in Python file runner
- Automatic virtual environment handling
- Batch package installation and uninstallation

## Prerequisites

Before installing npmpy, make sure you have:

1. **Node.js** installed and added to your system's PATH

   - Download from [nodejs.org](https://nodejs.org)
   - Verify installation with `node --version`
   - Ensure `npm` is accessible from your terminal

2. **Python** installed and added to your system's PATH
   - Download from [python.org](https://python.org)
   - Verify installation with `python --version`

To verify PATH setup:

```bash
# Check Node.js
node --version
npm --version

# Check Python
python --version
```

## Installation

```bash
npm install -g npmpy
```

## Usage

### Installing Packages

Install specific packages:

```bash
npmpy install package1 package2
# or use the shorthand
npmpy i package1 package2
```

Install from requirements.txt:

```bash
npmpy install
# or
npmpy i
```

### Running Python Files

Execute a Python file:

```bash
npmpy run script.py
# or use the shorthand
npmpy r script.py
```

### Uninstalling Packages

Remove specific packages:

```bash
npmpy uninstall package1 package2
# or use the shorthand
npmpy u package1 package2
```

## Commands

| Command                   | Alias | Description                                                                    |
| ------------------------- | ----- | ------------------------------------------------------------------------------ |
| `install [packages...]`   | `i`   | Install pip packages. If no packages specified, installs from requirements.txt |
| `run <file>`              | `r`   | Run a specified Python file                                                    |
| `uninstall [packages...]` | `u`   | Uninstall pip packages                                                         |

## Error Handling

- The tool will check for the existence of requirements.txt when installing dependencies
- Python file existence is verified before execution
- Virtual environment status is automatically checked and managed

## Contributing

Feel free to submit issues and pull requests.
