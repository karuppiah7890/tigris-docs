# Restrictions

## Naming restrictions.

Database, collection and field names have the following restrictions:

- Tigris db and collection name has to start with an alphabet (`a-z` or `A-Z`).
- Tigris db and collection name can contain alphabets (`a-z` or `A-Z`),
  digits (`0-9`) and `_`.
- In addition to this naming pattern - Tigris doesn't allow following set of
  reserved keywords to be used as db, collection or field names.

```bash
"abstract", "add", "alias", "and", "any", "args", "arguments", "array",
"as", "as?", "ascending", "assert", "async", "await", "base", "bool", "boolean", "break", "by", "byte",
"callable", "case", "catch", "chan", "char", "checked", "class", "clone", "const", "constructor", "continue",
"debugger", "decimal", "declare", "def", "default", "defer", "del", "delegate", "delete", "descending", "die",
"do", "double", "dynamic", "echo", "elif", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach",
"endif", "endswitch", "endwhile", "enum", "equals", "eval", "event", "except", "exception", "exit", "explicit",
"export", "extends", "extern", "fallthrough", "false", "final", "finally", "fixed", "float", "fn", "for",
"foreach", "from", "fun", "func", "function", "get", "global", "go", "goto", "group", "if", "implements",
"implicit", "import", "in", "include", "include_once", "init", "instanceof", "insteadof", "int", "integer",
"interface", "internal", "into", "is", "isset", "join", "lambda", "let", "list", "lock", "long", "managed",
"map", "match", "module", "nameof", "namespace", "native", "new", "nint", "none", "nonlocal", "not", "notnull",
"nuint", "null", "number", "object", "of", "on", "operator", "or", "orderby", "out", "override", "package",
"params", "partial", "pass", "print", "private", "protected", "public", "raise", "range", "readonly", "record",
"ref", "remove", "require", "require_once", "return", "sbyte", "sealed", "select", "set", "short", "sizeof",
"stackalloc", "static", "strictfp", "string", "struct", "super", "switch", "symbol", "synchronized", "this",
"throw", "throws", "trait", "transient", "true", "try", "type", "typealias", "typeof", "uint", "ulong",
"unchecked", "unmanaged", "unsafe", "unset", "use", "ushort", "using", "val", "value", "var", "virtual", "void",
"volatile", "when", "where", "while", "with", "xor", "yield"
```
