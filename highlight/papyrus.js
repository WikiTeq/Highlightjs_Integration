// Papyrus Syntax highlighter for Highlight.js
function papyrusHighlighter(hljs) {
  return {
    name: 'Papyrus',
    aliases: ['psc'],
    case_insensitive: true,
    contains: [
      // Strings
      { className: 'string', begin: /"/, end: /"/, contains: [{ begin: /\\"/ }] },

      // Comments
      hljs.COMMENT(/;/, /$/, { scope: 'comment.line.semicolon' }),
      hljs.COMMENT(/\{/, /\}/, { scope: 'comment.documentation' }),

      // TODO/FIXME/XXX inside comments
      {
        className: 'doctag',
        begin: /\b(TODO|FIXME|XXX)\b/i
      },

      // Numbers
      { className: 'number', begin: /-?0x[0-9a-f]+/i },
      { className: 'number', begin: /-?\d+\.\d+/ },
      { className: 'number', begin: /-?\d+/ },

      // Operators
      { className: 'operator', begin: /[-+*/%=.!<>]=?/ },
      { className: 'operator', begin: /&&|\|\|/ },
      { className: 'operator', begin: /\[\s*\]|\(\s*\)/ },
      { className: 'keyword', begin: /\b(Length|New|As)\b/i },

      // Storage
      { className: 'storage', begin: /\b(Global|Native|AutoReadOnly|Auto)\b/i },

      // Import
      { className: 'keyword', begin: /\bImport\b/i },

      // Control flow
      { className: 'keyword', begin: /\b(If|ElseIf|Else|EndIf|While|EndWhile|Return)\b/i },

      // Keywords
      { className: 'keyword', begin: /\b(Event|EndEvent|Function|EndFunction|State|EndState)\b/i },

      // Script block
      {
        className: 'meta',
        begin: /\b(ScriptName|Extends)\b/i,
        end: /$/,
        contains: [
          { className: 'keyword', begin: /\b(ScriptName|Extends)\b/i },
          { className: 'title', begin: /\w+/ }
        ]
      },

      // Types
      { className: 'type', begin: /\b(Bool|Boolean|Int|Integer|Float|String)\b/i },

      // Constants
      { className: 'literal', begin: /\b(None|Self|Parent)\b/i },
      { className: 'literal', begin: /\b(True|False)\b/i },

      // TES5 native script types (abbreviated here for brevity)
      {
        className: 'class',
        begin: /\b(Action|Actor|Alias|Ammo|Armor|Book|Cell|Container|Debug|EffectShader|Enchantment|Faction|Flora|Form|Furniture|Game|GlobalVariable|Hazard|Idle|Ingredient|Key|Keyword|LeveledActor|LeveledItem|MagicEffect|Message|MiscObject|ObjectReference|Package|Perk|Potion|Projectile|Quest|Race|Scene|Scroll|Shout|SoulGem|Sound|Spell|Static|TextureSet|Topic|UI|Utility|VisualEffect|VoiceType|Weapon|Weather|WordOfPower|WorldSpace)\b/i
      },

      // Object method calls like myObject.myMethod()
      {
	className: 'title.function',
	begin: /\b[a-zA-Z_]\w*\.(?=[a-zA-Z_]\w*\s*\()/,
	relevance: 0
	},
      // Plain function calls like myFunction()
      {
	className: 'title.function',
	begin: /\b[a-zA-Z_]\w*(?=\s*\()/,
	relevance: 0
      },
    ]
  };
}

// Register the language
hljs.registerLanguage('papyrus', papyrusHighlighter);
