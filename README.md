# Caesar cipher CLI tool

CLI tool encode and decode a text by Caesar cipher.

## Install

```
git clone https://github.com/dimonwhite/Caesar-cipher-CLI-tool.git
cd Caesar-cipher-CLI-tool/caesar-cipher-cli
npm i
```

## Options

1. -s, --shift: a shift (required)
2. -a, --action: an action encode/decode (required)
3. -i, --input: an input file
4. -o, --output: an output file

## Usage example
```
node caesar -a <encode|decode> -s <number> [-i <input.txt>] [-o <output.txt>]
```
```
node caesar -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
```
node caesar --action encode --shift 7 --input input.txt --output output.txt
```
```
node caesar -a decode -s 7
```
