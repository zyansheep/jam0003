// Generated from lang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class langLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly NUMBER = 14;
	public static readonly IDENTIFIER = 15;
	public static readonly WS = 16;
	public static readonly COMMENT = 17;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "NUMBER", "IDENTIFIER", "WS", "COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'component'", "'{'", "'}'", "':'", "'input'", "'output'", 
		"'gear'", "'rod'", "'->'", "'use'", "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NUMBER", "IDENTIFIER", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(langLexer._LITERAL_NAMES, langLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return langLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(langLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "lang.g4"; }

	// @Override
	public get ruleNames(): string[] { return langLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return langLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return langLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return langLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x13v\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x06\x0FZ\n\x0F\r\x0F\x0E\x0F[\x03\x10\x03\x10\x07" +
		"\x10`\n\x10\f\x10\x0E\x10c\v\x10\x03\x11\x06\x11f\n\x11\r\x11\x0E\x11" +
		"g\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12p\n\x12\f\x12" +
		"\x0E\x12s\v\x12\x03\x12\x03\x12\x02\x02\x02\x13\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!" +
		"\x02\x12#\x02\x13\x03\x02\x07\x03\x022;\x05\x02C\\aac|\x06\x022;C\\aa" +
		"c|\x05\x02\v\f\x0F\x0F\"\"\x03\x02\f\f\x02y\x02\x03\x03\x02\x02\x02\x02" +
		"\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
		"\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
		"\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03" +
		"\x02\x02\x02\x03%\x03\x02\x02\x02\x05/\x03\x02\x02\x02\x071\x03\x02\x02" +
		"\x02\t3\x03\x02\x02\x02\v5\x03\x02\x02\x02\r;\x03\x02\x02\x02\x0FB\x03" +
		"\x02\x02\x02\x11G\x03\x02\x02\x02\x13K\x03\x02\x02\x02\x15N\x03\x02\x02" +
		"\x02\x17R\x03\x02\x02\x02\x19T\x03\x02\x02\x02\x1BV\x03\x02\x02\x02\x1D" +
		"Y\x03\x02\x02\x02\x1F]\x03\x02\x02\x02!e\x03\x02\x02\x02#k\x03\x02\x02" +
		"\x02%&\x07e\x02\x02&\'\x07q\x02\x02\'(\x07o\x02\x02()\x07r\x02\x02)*\x07" +
		"q\x02\x02*+\x07p\x02\x02+,\x07g\x02\x02,-\x07p\x02\x02-.\x07v\x02\x02" +
		".\x04\x03\x02\x02\x02/0\x07}\x02\x020\x06\x03\x02\x02\x0212\x07\x7F\x02" +
		"\x022\b\x03\x02\x02\x0234\x07<\x02\x024\n\x03\x02\x02\x0256\x07k\x02\x02" +
		"67\x07p\x02\x0278\x07r\x02\x0289\x07w\x02\x029:\x07v\x02\x02:\f\x03\x02" +
		"\x02\x02;<\x07q\x02\x02<=\x07w\x02\x02=>\x07v\x02\x02>?\x07r\x02\x02?" +
		"@\x07w\x02\x02@A\x07v\x02\x02A\x0E\x03\x02\x02\x02BC\x07i\x02\x02CD\x07" +
		"g\x02\x02DE\x07c\x02\x02EF\x07t\x02\x02F\x10\x03\x02\x02\x02GH\x07t\x02" +
		"\x02HI\x07q\x02\x02IJ\x07f\x02\x02J\x12\x03\x02\x02\x02KL\x07/\x02\x02" +
		"LM\x07@\x02\x02M\x14\x03\x02\x02\x02NO\x07w\x02\x02OP\x07u\x02\x02PQ\x07" +
		"g\x02\x02Q\x16\x03\x02\x02\x02RS\x07*\x02\x02S\x18\x03\x02\x02\x02TU\x07" +
		"+\x02\x02U\x1A\x03\x02\x02\x02VW\x07.\x02\x02W\x1C\x03\x02\x02\x02XZ\t" +
		"\x02\x02\x02YX\x03\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\" +
		"\x03\x02\x02\x02\\\x1E\x03\x02\x02\x02]a\t\x03\x02\x02^`\t\x04\x02\x02" +
		"_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02" +
		"b \x03\x02\x02\x02ca\x03\x02\x02\x02df\t\x05\x02\x02ed\x03\x02\x02\x02" +
		"fg\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02" +
		"ij\b\x11\x02\x02j\"\x03\x02\x02\x02kl\x071\x02\x02lm\x071\x02\x02mq\x03" +
		"\x02\x02\x02np\n\x06\x02\x02on\x03\x02\x02\x02ps\x03\x02\x02\x02qo\x03" +
		"\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02sq\x03\x02\x02\x02tu\b" +
		"\x12\x02\x02u$\x03\x02\x02\x02\x07\x02[agq\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!langLexer.__ATN) {
			langLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(langLexer._serializedATN));
		}

		return langLexer.__ATN;
	}

}

