var word, wordEn, words="وَرَاء أُمَّة أَمَدّ دَارُ القَرَارْ حَدْ قَبَسْ", wordsEn = [], i =0, csv ='';

var words = _.map(SYNONYMS_DETAILS, function(o){ return o.word; }).join(' ')
_.each(words.split(' '), function(word){ wordsEn.push(ArToEn(word) ); });

//var _TREE;
//$.get('data/tree.json', function(data){ 
//	_TREE = data; console.log(wordsEn); console.log(_TREE); 
	mapWordsToRoots(wordsEn, _TREE);
//})


function mapWordsToRoots(wordsEn, _TREE){
	_.each(wordsEn, function(word){
	 var result = _.filter(_TREE, function(o){
	  return _.any(o.l, function(w){
		return w.indexOf(word) != -1;
	  });
	 })
     var id, root, set, ar, root;
	 if(result && result.length > 0 && result.length < 5){ ar = EnToAr(word);
       set = _.filter(SYNONYMS_DETAILS, function(o){ return o.word == ar;});
       id = _.map(set, function(o){ return o.id; }).join(' ');
       root = _.map(result, function(o){ return o.r; });
	   console.log( ++i + ': '+ id + '\t'+ root +'\t\t\t'+ word +'\t'+ ar  +'\t'+ (JSON.stringify(result) ) );
       csv += id +','+ root+'\n';
	 }
	});
    console.log('\n\n\n\n\n'); console.log(csv);
}



1: [{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}]	skn			sakana	سَكَنَ	[{"r":"skn","l":["sakana","masokanap","misokiyn","sakiynap","sakan","masokan","sik~iyn",">asokan","masokuwnap","saAkin"],"ln":[15,2,23,6,3,12,1,5,1,1]}]
2: [{"id":"D1","word":"بَدَا","wordEn":"Badaa"}]	bdw			badaA	بَدَا	[{"r":"bdw","l":["yubodiYa","badaA","baAdiY","badow","baAd","baAduwn","mubodiy"],"ln":[15,11,1,1,1,1,1]}]
3: [{"id":"A1","word":"حَضَرَ","wordEn":"Ha’darr","root":"HDr","$$hashKey":"011"}]	HDr			HaDara	حَضَرَ	[{"r":"HDr","l":["HaDara","HaADiriY","HaADirap","m~uHoDar",">aHoDarato","HaADir","m~uHotaDar"],"ln":[7,1,2,10,3,1,1]}]
4: []	swy,Awy			AwaY	اوَى	[{"r":"swy","l":["sawaA^'","{sotawaY`^","saw~aY`","tusaw~aY`","saAwaY`","sawiy~","suwFY"],"ln":[27,35,13,1,1,5,1]},{"r":"Awy","l":["ma>owaY`","'aAwaY`^",">awaY"],"ln":[22,9,5]}]
5: [{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}]	skn			sakana	سَكَنَ	[{"r":"skn","l":["sakana","masokanap","misokiyn","sakiynap","sakan","masokan","sik~iyn",">asokan","masokuwnap","saAkin"],"ln":[15,2,23,6,3,12,1,5,1,1]}]
6: [{"id":"A11","word":"يَسِير","wordEn":"Yaseer"}]	ysr			yasiyr	يَسِير	[{"r":"ysr","l":["yusor","{sotayosara","mayosir","mayosarap","yasiyr","m~ayosuwr","yas~ara","tayas~ara","yusoraY`"],"ln":[7,2,3,1,15,1,11,2,2]}]
7: [{"id":"A15","word":"جَذْوَة","wordEn":"Jath’wah"}]	j*w			ja*owap	جَذْوَة	[{"r":"j*w","l":["ja*owap"],"ln":[1]}]
8: [{"id":"A19","word":"ظَهَرَ","wordEn":"Tha’ha’ra"},{"id":"g3","word":"ظَهَرَ","wordEn":"Thahara"},{"id":"D1","word":"ظَهَرَ","wordEn":"Zahara"}]	Zhr			Zahara	ظَهَرَ	[{"r":"Zhr","l":["taZa`haru","Zahor","Za`hir","Zahara","Za`haru",">aZohara","Zihoriy~","Zahiyr","Z~ahiyrap","Za`hirap"],"ln":[2,15,8,10,6,8,1,6,1,2]}]
9: [{"id":"A19","word":"عَلِمَ","wordEn":"A’lima"}]	Elm			Ealima	عَلِمَ	[{"r":"Elm","l":["Ea`lamiyn","Ealima","Ealiym","Eal~ama","Eilom","yataEal~amu",">aEolam","m~aEoluwma`t","Eal~a`m","Ea`lim","m~aEoluwm","Eala`ma`t",">aEola`m","muEal~am"],"ln":[73,382,163,41,105,2,49,2,4,18,11,1,2,1]}]
10: [{"id":"A20","word":"عَلَّمَ","wordEn":"Allama"}]	Elm			Eal~ama	عَلَّمَ	[{"r":"Elm","l":["Ea`lamiyn","Ealima","Ealiym","Eal~ama","Eilom","yataEal~amu",">aEolam","m~aEoluwma`t","Eal~a`m","Ea`lim","m~aEoluwm","Eala`ma`t",">aEola`m","muEal~am"],"ln":[73,382,163,41,105,2,49,2,4,18,11,1,2,1]}]
11: [{"id":"A20","word":"نَبَّأَ","wordEn":"Nab’ba’a"}]	nbA			nab~a>a	نَبَّأَ	[{"r":"nbA","l":[">an[ba>a","n~abiY~","nab~a>a","naba>","n~ubuw~ap","yasotan[bi_#u"],"ln":[4,75,46,29,5,1]}]
12: [{"id":"A24","word":"حِذْر","wordEn":"Hithir"},{"id":"dd3","wordEn":"Hithrr","word":"حِذْر","root":"H*r"}]	H*r			Hi*or	حِذْر	[{"r":"H*r","l":["Ha*ar","yaHo*aru","yuHa*~iru","Hi*or","maHo*uwr","Ha`*iruwn"],"ln":[2,12,2,3,1,1]}]
13: [{"id":"A25","word":"أَتَى","wordEn":"Ataa"},{"id":"d34","wordEn":"Ataa","word":"أَتَى","root":"Aty"}]	Aty			>ataY	أَتَى	[{"r":"Aty","l":[">ataY","A^taY","mu&otuwn","A^tiy","<iytaA'N","ma>otiy~N"],"ln":[264,271,1,9,3,1]}]
14: [{"id":"A25","word":"هَيْتَ","wordEn":"Hayta"}]	hyt			hayota	هَيْتَ	[{"r":"hyt","l":["hayota"],"ln":[1]}]
15: [{"id":"A25","word":"تَعَال","wordEn":"Ta’aal"}]	Elw			taEaAl	تَعَال	[{"r":"Elw","l":["Ealiy~","taEaAla",">aEolawon","taEa`laY`","EuloyaA","EaAl","EaAliy","mutaEaAl",">aEolaY`","Euluw~","{sotaEolaY`","EaAliyn","EaAliyap","Eil~iy~iyn"],"ln":[11,8,2,20,3,1,4,1,9,4,1,2,2,2]}]
16: [{"id":"A28","word":"صَدّ","wordEn":"Sadd"}]	Sdq,Sdd,Sdy,SdE			Sad~	صَدّ	[{"r":"Sdq","l":["SaAdiq","muSad~iq","Sadaqa","Sadaqap","Sadaqa`t","taSad~aqa","Saduqa`t","Sid~iyq",">aSodaq","Sid~iyqap","Sidoq","taSodiyq","mutaSad~iqiyn","Sadiyq","Sad~aqa","S~a`diqa`t","mutaSad~iqa`t","muS~ad~iqiyn","muS~ad~iqa`t"],"ln":[59,19,15,5,8,6,1,5,2,1,14,2,2,2,10,1,1,1,1]},{"r":"Sdd","l":["Sad~","Sad~a","Suduwd","Sud~u","Sadiyd"],"ln":[2,37,1,1,1]},{"r":"Sdy","l":["taSodiyap","taSad~aY`"],"ln":[1,1]},{"r":"SdE","l":["{SodaEo","yaS~ad~aEu","yuSad~aEu","m~utaSad~iE","S~adoE"],"ln":[1,1,1,1,1]}]
17: [{"id":"A28","word":"هَمْس","wordEn":"Hamss"}]	hms			hamos	هَمْس	[{"r":"hms","l":["hamos"],"ln":[1]}]
18: [{"id":"A28","word":"تَصْدِيَة","wordEn":"Tass’diyah"}]	Sdy			taSodiyap	تَصْدِيَة	[{"r":"Sdy","l":["taSodiyap","taSad~aY`"],"ln":[1,1]}]
19: [{"id":"A28","word":"رِكْز","wordEn":"rikz"}]	rkz			rikoz	رِكْز	[{"r":"rkz","l":["rikoz"],"ln":[1]}]
20: [{"id":"A28","word":"صَيْحَة","wordEn":"Say’hah"},{"id":"E7","word":"صَيْحَة","wordEn":"Sayhah"}]	SyH			SayoHap	صَيْحَة	[{"r":"SyH","l":["SayoHap"],"ln":[13]}]
21: [{"id":"A28","word":"تَغَيُّظ","wordEn":"Ta’ghayyuz"}]	gyZ			tagay~uZ	تَغَيُّظ	[{"r":"gyZ","l":["gayoZ","yagiyZu","tagay~uZ","gaA^}iZuwn"],"ln":[6,3,1,1]}]
22: [{"id":"A28","word":"هَدّ","wordEn":"Hadda"}]	hdd			had~	هَدّ	[{"r":"hdd","l":["had~"],"ln":[1]}]
23: [{"id":"A28","word":"قَارِعَة","wordEn":"Qaari’ah"}]	qrE			qaAriEap	قَارِعَة	[{"r":"qrE","l":["qaAriEap"],"ln":[5]}]
24: [{"id":"A29","word":"رُوَيْد","wordEn":"Ruwayd"}]	rwd			ruwayod	رُوَيْد	[{"r":"rwd","l":[">araAda","ra`wadu","ruwayod"],"ln":[139,8,1]}]
25: [{"id":"A29","word":"عُرْف","wordEn":"Urff"}]	Erf			Eurof	عُرْف	[{"r":"Erf","l":["Earafa","m~aEoruwf",">aEoraAf","Eurof","{Eotarafu","yataEaArafu","m~aEoruwfap","Ear~afa"],"ln":[20,38,2,2,3,2,1,2]}]
26: [{"id":"A29","word":"يُسْر","wordEn":"Yussr"}]	ysr			yusor	يُسْر	[{"r":"ysr","l":["yusor","{sotayosara","mayosir","mayosarap","yasiyr","m~ayosuwr","yas~ara","tayas~ara","yusoraY`"],"ln":[7,2,3,1,15,1,11,2,2]}]
27: [{"id":"AA1","word":"فَارَ","wordEn":"Faara"}]	fwr			faAra	فَارَ	[{"r":"fwr","l":["fawor","faAra"],"ln":[1,3]}]
28: [{"id":"AA2","word":"كَعْب","wordEn":"Ka’ab"}]	kEb			kaEob	كَعْب	[{"r":"kEb","l":["kaEobayon","kaEobap","kawaAEib"],"ln":[1,2,1]}]
29: [{"id":"AA2","word":"سَمْك","wordEn":"Sam’k"}]	smk			samok	سَمْك	[{"r":"smk","l":["samok"],"ln":[1]}]
30: [{"id":"AA3","word":"جَرَم","wordEn":"Jarama"}]	jrm			jaram	جَرَم	[{"r":"jrm","l":["yajorima","mujorim",">ajoramu","jaram","<ijoraAm"],"ln":[3,52,5,5,1]}]
31: [{"id":"AA4","word":"نَزَلَ","wordEn":"Nazala"}]	nzl			nazala	نَزَلَ	[{"r":"nzl","l":[">anzala","naz~ala","munzal","nuzul","munaz~il","munaz~al","manaAzil","munziliyn","nazala","tanziyl","tanaz~alato","nazolap"],"ln":[183,62,2,8,1,1,2,5,6,15,7,1]}]
32: [{"id":"AA4","word":"وَضَعَ","wordEn":"Wada’a"}]	wDE			waDaEa	وَضَعَ	[{"r":"wDE","l":["waDaEa","m~awaADiE",">awoDaEu","m~awoDuwEap"],"ln":[21,3,1,1]}]
33: [{"id":"AA5","word":"فَرِحَ","wordEn":"Fariha"}]	frH			fariHa	فَرِحَ	[{"r":"frH","l":["fariHa","fariH"],"ln":[16,6]}]
34: [{"id":"AA7","word":"حَمَلَ","wordEn":"Hamala"}]	Hml			Hamala	حَمَلَ	[{"r":"Hml","l":["Hamala","Hum~ila","{Hotamala","Hamuwlap","Hamol","Himol","Ha`miliyn","Ha`mila`t",">aHomaAl","Ham~aAlap"],"ln":[41,5,3,1,7,3,1,1,1,1]}]
35: [{"id":"AA7","word":"بَعَثَ","wordEn":"Ba’a’tha"},{"id":"b65","word":"بَعَثَ","wordEn":"Ba’a’tha"}]	bEv			baEava	بَعَثَ	[{"r":"bEv","l":["baEava","m~aboEuwvuwn","{nbiEaAv","baEov","{n[baEava"],"ln":[52,9,1,4,1]}]
36: [{"id":"AA8","word":"قَامَ","wordEn":"Qaama"}]	qwm			qaAma	قَامَ	[{"r":"qwm","l":["m~usotaqiym",">aqaAma","qaAma","qawom","qiya`map","maqaAm","qay~uwm",">aqowam","qaA^}im","qaA^}imap","qaw~a`miyn","m~uqiym","qiyam","{sotaqa`mu","qay~im","<iqaAmat","<iqaAm","muqaAm","qawaAm","muqaAmap","taqowiym","qay~imap"],"ln":[37,54,33,383,70,14,3,4,17,5,3,10,1,10,5,1,2,3,1,1,1,2]}]
37: [{"id":"AA10","word":"عُتُلّ","wordEn":"Utull"}]	Etl			Eutul~	عُتُلّ	[{"r":"Etl","l":["{Eotilu","Eutul~"],"ln":[1,1]}]
38: [{"id":"AA10","word":"فَظّ","wordEn":"Fazz"}]	fZZ			faZ~	فَظّ	[{"r":"fZZ","l":["faZ~"],"ln":[1]}]
39: [{"id":"AA12","word":"نِعْمَ","wordEn":"Ni’ema"}]	nEm			niEoma	نِعْمَ	[{"r":"nEm","l":[">anoEama","niEomap","niEoma","n~aEam","naEiym","naEomaA^'","n~aEomap","n~aAEimap","naE~ama"],"ln":[17,50,18,33,17,1,2,1,1]}]
40: [{"id":"AA12","word":"خَيْر","wordEn":"Khayr"},{"id":"m3","word":"خَيْر","wordEn":"Khayr"}]	xyr			xayor	خَيْر	[{"r":"xyr","l":["xayor","xayora`t","{xotaAra","xiyarap","yataxay~aru"],"ln":[178,10,4,2,2]}]
41: [{"id":"AA12","word":"حَسُنَ","wordEn":"Hasuna"}]	Hsn			Hasuna	حَسُنَ	[{"r":"Hsn","l":["muHosin","<iHosa`n","Huson",">aHosan",">aHosana","Hasanap","Hasan","Hasuna","HusonaY`","Hasana`t","Husonayayon","muHosina`t"],"ln":[38,12,13,36,21,28,21,3,17,3,1,1]}]
42: [{"id":"AA13","word":"نَكِرَ","wordEn":"Nakira"},{"id":"b35","word":"نَكِرَ","wordEn":"Nakira"}]	nkr			nakira	نَكِرَ	[{"r":"nkr","l":["munkar","nakira","munkiruwn","yunkiru","m~unkirap","n~ukor","nakiyr","nak~iru",">ankar","n~akiyr","n~ukur"],"ln":[18,1,3,3,1,3,4,1,1,1,1]}]
43: [{"id":"AA14","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n19","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n34","word":"أَنْعَمَ","wordEn":"An’ama"}]	nEm			>anoEama	أَنْعَمَ	[{"r":"nEm","l":[">anoEama","niEomap","niEoma","n~aEam","naEiym","naEomaA^'","n~aEomap","n~aAEimap","naE~ama"],"ln":[17,50,18,33,17,1,2,1,1]}]
44: [{"id":"AA14","word":"أَحْسَنَ","wordEn":"Ahsana"},{"id":"n34","word":"أَحْسَنَ","wordEn":"Ah’sana"}]	Hsn			>aHosana	أَحْسَنَ	[{"r":"Hsn","l":["muHosin","<iHosa`n","Huson",">aHosan",">aHosana","Hasanap","Hasan","Hasuna","HusonaY`","Hasana`t","Husonayayon","muHosina`t"],"ln":[38,12,13,36,21,28,21,3,17,3,1,1]}]
45: [{"id":"AA15","word":"مَلْك","wordEn":"Malk"}]	mlk			malok	مَلْك	[{"r":"mlk","l":["ma`lik","malak","mulok","malik","malakato","malakuwt","m~amoluwk","malok","ma`lik2","maliyk"],"ln":[3,88,48,15,44,4,1,1,1,1]}]
46: [{"id":"AA15","word":"أَمْكَنَ","wordEn":"Amkana"}]	mkn			>amokana	أَمْكَنَ	[{"r":"mkn","l":["mak~a",">amokana","m~akiyn"],"ln":[13,1,4]}]
47: [{"id":"AA17","word":"قَرْض","wordEn":"Qard"}]	qrD			qaroD	قَرْض	[{"r":"qrD","l":[">aqoraDu","qaroD","t~aqoriDu"],"ln":[6,6,1]}]
48: [{"id":"AA18","word":"أَرَادَ","wordEn":"Araada"}]	rwd			>araAda	أَرَادَ	[{"r":"rwd","l":[">araAda","ra`wadu","ruwayod"],"ln":[139,8,1]}]
49: [{"id":"AA18","word":"عَزَمَ","wordEn":"Azama"}]	Ezm			Eazama	عَزَمَ	[{"r":"Ezm","l":["Eazama","Eazom"],"ln":[4,5]}]
50: [{"id":"AA23","word":"أَشَارَ","wordEn":"A’shaara"}]	$wr			>a$aAra	أَشَارَ	[{"r":"$wr","l":["ta$aAwur","$aAwiro",">a$aArato","$uwraY`"],"ln":[1,1,1]}]
51: [{"id":"AA24","word":"تَبِعَ","wordEn":"Tabiaa"}]	tbE			tabiEa	تَبِعَ	[{"r":"tbE","l":["tabiEa","{t~abaEa","taAbiE","{t~ibaAE",">atobaEa","mutataAbiEayon","tabaE","tabiyE","m~ut~abaEuwn"],"ln":[9,136,3,2,15,2,2,1,2]}]
52: [{"id":"AA24","word":"أُسْوَة","wordEn":"Uss’wah"}]	Asw			>usowap	أُسْوَة	[{"r":"Asw","l":["ta>osa",">usowap"],"ln":[4,3]}]
53: [{"id":"AA24","word":"أَطَاعَ","wordEn":"Ataa’aa"}]	TwE			>aTaAEa	أَطَاعَ	[{"r":"TwE","l":["taTaw~aEa","{sotaTaAEa",">aTaAEa","TawoE","yuTaAEu","TaAEap","Taw~aEato","muT~aw~iEiyn","TaA^}iEiyn","m~uTaAE"],"ln":[2,42,72,4,2,3,1,1,1,1]}]
54: [{"id":"AA24","word":"أَسْلَمَ","wordEn":"Asslama"}]	slm			>asolama	أَسْلَمَ	[{"r":"slm","l":["m~usal~amap",">asolama","musolim","m~usolimap","s~ilom","sal~ama","<isola`m","tasoliym","salam","sala`m","sul~am","s~alom","saliym","musolima`t","musotasolimuwn","sa`limuwn"],"ln":[3,22,39,1,1,6,8,3,5,42,2,2,2,2,1,1]}]
55: [{"id":"AA25","word":"قَصْد","wordEn":"Qassd"},{"id":"d10","wordEn":"Qassd","word":"قَصْد","root":"qsd"}]	qSd			qaSod	قَصْد	[{"r":"qSd","l":["m~uqotaSidap","qaASid","qaSod","{qoSido","m~uqotaSid"],"ln":[1,1,1,1,2]}]
56: [{"id":"AA25","word":"وَسَطْ","wordEn":"Wasat"}]	wsT			wasaTo	وَسَطْ	[{"r":"wsT","l":["wasaT","wusoTaY`",">awosaT","wasaTo"],"ln":[1,1,2,1]}]
57: [{"id":"AA26","word":"قِطّ","wordEn":"Qitt"}]	qTT			qiT~	قِطّ	[{"r":"qTT","l":["qiT~"],"ln":[1]}]
58: [{"id":"AA26","word":"صُحُف","wordEn":"Suhuff"},{"id":"k11","word":"صُحُف","wordEn":"Suhuff"}]	SHf			SuHuf	صُحُف	[{"r":"SHf","l":["SuHuf","SiHaAf"],"ln":[8,1]}]
59: [{"id":"AA27","word":"وَيْل","wordEn":"Wayl"}]	-			wayol	وَيْل	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
60: [{"id":"AA29","word":"شَهِدَ","wordEn":"Shahida"}]	$hd			$ahida	شَهِدَ	[{"r":"$hd","l":["$ahiyd","$ahida","$aha`dap",">a$ohada","{sota$ohidu","$aAhid","ma$ohuwd","m~a$ohad","$aha`da`t"],"ln":[56,44,23,7,2,21,3,1]}]
61: [{"id":"AA30","word":"جَمَعَ","wordEn":"Jama’aa"}]	jmE			jamaEa	جَمَعَ	[{"r":"jmE","l":["jamiyE",">ajomaEiyn","jaAmiE","jamaEa","jamoE",">ajomaEu","m~ajomuwE","{jotamaEu","majomaE","m~ujotamiEuwn","jumuEap"],"ln":[53,26,3,22,13,4,2,2,2,1,1]}]
62: [{"id":"AA30","word":"حَشَرَ","wordEn":"Hashara"}]	H$r			Ha$ara	حَشَرَ	[{"r":"H$r","l":["Ha$ara","Ha`$iriyn","maHo$uwrap","Ha$or"],"ln":[37,3,1,2]}]
63: [{"id":"AA30","word":"خَزَنَ","wordEn":"Khazana"}]	xzn			xazana	خَزَنَ	[{"r":"xzn","l":["xazaA^}in","xa`ziniyn","xazanat"],"ln":[8,1,4]}]
64: [{"id":"AA32","word":"فَرْد","wordEn":"Farrd"}]	frd			farod	فَرْد	[{"r":"frd","l":["fura`daY`","farod"],"ln":[2,3]}]
65: [{"id":"AA34","word":"أَرْكَسَ","wordEn":"Arrkasa"}]	rks			>arokasa	أَرْكَسَ	[{"r":"rks","l":[">arokasa"],"ln":[2]}]
66: [{"id":"AA36","word":"فَصَلَ","wordEn":"Fasala"},{"id":"f14","word":"فَصَلَ","wordEn":"Fasala"}]	fSl			faSala	فَصَلَ	[{"r":"fSl","l":["fiSaAl","faSala","faS~ala","fa`Siliyn","mufaS~al","tafoSiyl","m~ufaS~ala`t","faSol","faSiylat"],"ln":[3,5,17,1,1,5,1,9,1]}]
67: [{"id":"AA37","word":"مَتَى","wordEn":"Mataa"},{"id":"k10","word":"مَتَى","wordEn":"Mataa"}]	-			mataY	مَتَى	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
68: [{"id":"AA38","word":"حَوَايَا","wordEn":"Hawaayaa"}]	Hwy			HawaAyaA	حَوَايَا	[{"r":"Hwy","l":["HawaAyaA^",">aHowaY`"],"ln":[1,1]}]
69: [{"id":"AA41","word":"أَعْمَى","wordEn":"Aa’maa"}]	Emy			>aEomaY	أَعْمَى	[{"r":"Emy","l":[">aEomaY`","EamiYa","Eamuwn","Eum~iyato","EamFY"],"ln":[21,7,2,1,2]}]
70: [{"id":"AA43","word":"أَبَى","wordEn":"Abaa"}]	Aby			>abaY	أَبَى	[{"r":"Aby","l":[">abaY"],"ln":[13]}]
71: [{"id":"AA43","word":"كَفَرَ","wordEn":"Kafara"}]	kfr			kafara	كَفَرَ	[{"r":"kfr","l":["kafara","ka`firuwn","kaAfir","kufor","kaf~ara","kaf~aAr","kaAfirap","kaf~a`rap","kafuwr","kufuwr","kuforaAn","kawaAfir","kaAfuwr",">akofara"],"ln":[289,129,27,37,14,5,1,4,12,3,1,1,1,1]}]
72: [{"id":"AA46","word":"حَفَدَة","wordEn":"Hafadah"}]	Hfd			Hafadap	حَفَدَة	[{"r":"Hfd","l":["Hafadap"],"ln":[1]}]
73: [{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}]	Ahl,hlk			>ahol	أَهْل	[{"r":"Ahl","l":[">ahol"],"ln":[127]},{"r":"hlk","l":["t~aholukap",">aholaka","halaka","muholik","haAlik","maholik","muholakiyn","muholikiY"],"ln":[1,51,5,5,2,2,1,1]}]
74: [{"id":"AA47","word":"عِهْن","wordEn":"Eh’n"}]	Ehn			Eihon	عِهْن	[{"r":"Ehn","l":["Eihon"],"ln":[2]}]
75: [{"id":"AA48","word":"هِيم","wordEn":"Jamal"},{"id":"b122","word":"هِيم","wordEn":"Heem"}]	-,bhm,hym			hiym	هِيم	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"bhm","l":["bahiymap"],"ln":[3]},{"r":"hym","l":["yahiymu","hiym"],"ln":[1,1]}]
76: [{"id":"AA48","word":"نَاقَة","wordEn":"Rikaab"}]	nwq			naAqap	نَاقَة	[{"r":"nwq","l":["naAqap"],"ln":[7]}]
77: [{"id":"AA48","word":"ضَامِر","wordEn":"Naaqah"},{"id":"d4","wordEn":"Daamir","word":"ضَامِر","root":"Dmr"}]	Dmr			DaAmir	ضَامِر	[{"r":"Dmr","l":["DaAmir"],"ln":[1]}]
78: [{"id":"AA48","word":"عِشَار","wordEn":"Daamir"}]	E$r			Ei$aAr	عِشَار	[{"r":"E$r","l":["Ea$orap","Ea$arap","Ea$or","EaA$iru","Ea$ar","maEo$ar","Ei$oruwn","Ea$iyrat","Ea$iyr","miEo$aAr","Ei$aAr"],"ln":[3,2,7,1,4,3,1,3,1,1,1]}]
79: [{"id":"AA48","word":"بُدْن","wordEn":"E’shaar"},{"id":"q10","word":"بُدْن","wordEn":"Budn"}]	bdn			budon	بُدْن	[{"r":"bdn","l":["badan","budon"],"ln":[1,1]}]
80: [{"id":"AA48","word":"بَحِيرَة","wordEn":"Budn"}]	bHr			baHiyrap	بَحِيرَة	[{"r":"bHr","l":["baHor","baHiyrap"],"ln":[41,1]}]
81: [{"id":"AA48","word":"وَصِيلَة","wordEn":"Waseelah"}]	wSl			waSiylap	وَصِيلَة	[{"r":"wSl","l":["yaSilu","waSiylap","waS~alo"],"ln":[10,1,1]}]
82: [{"id":"AA49","word":"سِنَة","wordEn":"Sinah"}]	wsn			sinap	سِنَة	[{"r":"wsn","l":["sinap"],"ln":[1]}]
83: [{"id":"b2","word":"طُوبَى","wordEn":"Toobaa"}]	Tyb			TuwbaY	طُوبَى	[{"r":"Tyb","l":["Tay~iba`t","Tay~ib","Tay~ibap","TaAba","TuwbaY`"],"ln":[21,16,9,3,1]}]
84: [{"id":"b3","word":"قَوْل","wordEn":"Qawl"}]	qwl			qawol	قَوْل	[{"r":"qwl","l":["qaAla","qawol","qiyl","qaA^}il","taqaw~ala",">aqaAwiyl"],"ln":[1618,92,4,5,2,1]}]
85: [{"id":"b3","word":"كَلِمَة","wordEn":"Kalimah"}]	klm			kalimap	كَلِمَة	[{"r":"klm","l":["kalima`t","kala`m","kal~ama","kalimap","kalim","takoliym","yatakal~amu"],"ln":[14,4,20,28,4,1,4]}]
86: [{"id":"b4","word":"خَاطَبَ","wordEn":"Khaataba"}]	xTb			xaATaba	خَاطَبَ	[{"r":"xTb","l":["xiTobap","xaATaba","xaTob","xiTaAb"],"ln":[1,3,5,3]}]
87: [{"id":"b6","word":"مُزْن","wordEn":"Muzn"}]	mzn			muzon	مُزْن	[{"r":"mzn","l":["muzon"],"ln":[1]}]
88: [{"id":"b8","word":"طَلّ","wordEn":"Ta’l"}]	Tlq,Tll			Tal~	طَلّ	[{"r":"Tlq","l":["T~ala`q","muTal~aqa`t","Tal~aqa","{nTalaqa"],"ln":[2,2,10,9]},{"r":"Tll","l":["Tal~"],"ln":[1]}]
89: [{"id":"b8","word":"وَدْق","wordEn":"Wadq"}]	wdq			wadoq	وَدْق	[{"r":"wdq","l":["wadoq"],"ln":[2]}]
90: [{"id":"b12","word":"أَبْقَى","wordEn":"Ab’qaa"}]	bqy			>aboqaY	أَبْقَى	[{"r":"bqy","l":["baqiy~at","baqiYa","baAq","ba`qiya`t",">aboqaY`^","baAqiyn","baAqiyap","tuboqiY"],"ln":[3,3,1,2,7,2,2,1]}]
91: [{"id":"b16","word":"جِبْت","wordEn":"Jibt"}]	jbt			jibot	جِبْت	[{"r":"jbt","l":["jibot"],"ln":[1]}]
92: [{"id":"b17","word":"بَرْق","wordEn":"Barq"}]	brq			baroq	بَرْق	[{"r":"brq","l":["baroq","bariqa"],"ln":[5,1]}]
93: [{"id":"b17","word":"رَعْد","wordEn":"Ra’ad"}]	rEd			raEod	رَعْد	[{"r":"rEd","l":["raEod"],"ln":[2]}]
94: [{"id":"b17","word":"صَاعِقَة","wordEn":"Saa’eqah"}]	SEq			SaAEiqap	صَاعِقَة	[{"r":"SEq","l":["SaAEiqap","SaEiq","SaEiqa"],"ln":[8,1,2]}]
95: [{"id":"b18","word":"وَقَى","wordEn":"Waqaa"}]	wqy			waqaY	وَقَى	[{"r":"wqy","l":["mut~aqiyn","{t~aqaY`","taqowaY","waqaY`","tuqaY`p","taqiy~","waAq",">atoqaY"],"ln":[49,166,17,16,1,4,3,2]}]
96: [{"id":"b18","word":"أَحْصَنَ","wordEn":"Ah’sana"}]	HSn			>aHoSana	أَحْصَنَ	[{"r":"HSn","l":["muHoSana`t","m~uHoSiniyn",">aHoSanato","taHaS~un","HuSuwn","m~uHaS~anap"],"ln":[8,2,5,1,1,1]}]
97: [{"id":"b19","word":"حَذَر","wordEn":"Hathar"}]	H*r			Ha*ar	حَذَر	[{"r":"H*r","l":["Ha*ar","yaHo*aru","yuHa*~iru","Hi*or","maHo*uwr","Ha`*iruwn"],"ln":[2,12,2,3,1,1]}]
98: [{"id":"b20","word":"وَلِيد","wordEn":"Waleed"},{"id":"b67","word":"وَلِيد","wordEn":"Waleed"}]	wld			waliyd	وَلِيد	[{"r":"wld","l":["waAlid","walad","wa`lida`t","mawoluwd","wa`lidap","waliyd","walada","wa`liday"],"ln":[14,56,1,3,2,7,9,10]}]
99: [{"id":"b20","word":"طِفْل","wordEn":"Tifl"}]	Tfl			Tifol	طِفْل	[{"r":"Tfl","l":["Tifol"],"ln":[4]}]
100: [{"id":"b20","word":"صَبِي","wordEn":"Sabee"}]	Sbw			Sabiy	صَبِي	[{"r":"Sbw","l":[">aSobu","Sabiy~"],"ln":[1,2]}]
101: [{"id":"b21","word":"دَحَى","wordEn":"Dahaa"}]	dHw			daHaY	دَحَى	[{"r":"dHw","l":["daHaY`"],"ln":[1]}]
102: [{"id":"b21","word":"طَحَى","wordEn":"Tahaa"}]	THw			TaHaY	طَحَى	[{"r":"THw","l":["TaHaY`"],"ln":[1]}]
103: [{"id":"b23","word":"أَكْدَى","wordEn":"Ak’daa"}]	kdy			>akodaY	أَكْدَى	[{"r":"kdy","l":[">akodaY`^"],"ln":[1]}]
104: [{"id":"b24","word":"حُسُوم","wordEn":"Hosoom"},{"id":"n10","word":"حُسُوم","wordEn":"Husoom"},{"id":"l12","word":"حُسُوم","wordEn":"Hussom"}]	Hsm			Husuwm	حُسُوم	[{"r":"Hsm","l":["Husuwm"],"ln":[1]}]
105: [{"id":"b25","word":"لَعَنَ","wordEn":"La’ana"}]	lEn			laEana	لَعَنَ	[{"r":"lEn","l":["laEana","laEonap","l~a`Einuwn","maloEuwnap","m~aloEuwniyn","laEon"],"ln":[23,14,1,1,1,1]}]
106: [{"id":"b25","word":"بَعُدَ","wordEn":"Ba’oda"}]	bEd			baEuda	بَعُدَ	[{"r":"bEd","l":["baEod","baEiyd","baEudato","buEod","muboEaduwn","ba`Eido"],"ln":[199,25,2,7,1,1]}]
107: [{"id":"b29","word":"عَدْل","wordEn":"Adl"},{"id":"b36","word":"عَدْل","wordEn":"Adl"}]	Edl			Eadol	عَدْل	[{"r":"Edl","l":["Eadol","Eadala"],"ln":[14,14]}]
108: [{"id":"b29","word":"أَجْر","wordEn":"Ajr"}]	Ajr,jrm			>ajor	أَجْر	[{"r":"Ajr","l":[">ajor","{sota_#ojaro","ta>ojura"],"ln":[105,2,1]},{"r":"jrm","l":["yajorima","mujorim",">ajoramu","jaram","<ijoraAm"],"ln":[3,52,5,5,1]}]
109: [{"id":"b29","word":"ثَوَاب","wordEn":"Thawaab"}]	vwb			vawaAb	ثَوَاب	[{"r":"vwb","l":["mavuwbap","mavaAbap","vawaAb",">ava`ba","viyaAb","vuw~iba"],"ln":[2,1,13,3,8,1]}]
110: [{"id":"b29","word":"عِقَاب","wordEn":"E’qaab"},{"id":"E5","word":"عِقَاب","wordEn":"Eqaab"}]	Eqb			EiqaAb	عِقَاب	[{"r":"Eqb","l":["Eaqib","EiqaAb","Ea`qibap",">aEoqaba","muEaq~iba`t","EuqobaY","muEaq~ib","EaAqaba","Euqob","yuEaq~ibo","Eaqabap"],"ln":[8,20,32,1,1,6,1,6,1,2,2]}]
111: [{"id":"b29","word":"وَبَال","wordEn":"Wabaal"},{"id":"E5","word":"وَبَال","wordEn":"Wabaal"}]	wbl			wabaAl	وَبَال	[{"r":"wbl","l":["waAbil","wabaAl","wabiyl"],"ln":[3,4,1]}]
112: [{"id":"b29","word":"قِصَاص","wordEn":"Qisaas"}]	qSS			qiSaAS	قِصَاص	[{"r":"qSS","l":["qiSaAS","qaSaS","qaS~a"],"ln":[4,6,20]}]
113: [{"id":"b30","word":"جَزَى","wordEn":"Jazaa"},{"id":"k5","word":"جَزَى","wordEn":"Jazaa"}]	jzy			jazaY	جَزَى	[{"r":"jzy","l":["jazaY`","jazaA^'","jizoyap","jaAz","nuja`ziY^"],"ln":[73,42,1,1,1]}]
114: [{"id":"b31","word":"عَاقَبَ","wordEn":"Aaa’qaba"}]	Eqb			EaAqaba	عَاقَبَ	[{"r":"Eqb","l":["Eaqib","EiqaAb","Ea`qibap",">aEoqaba","muEaq~iba`t","EuqobaY","muEaq~ib","EaAqaba","Euqob","yuEaq~ibo","Eaqabap"],"ln":[8,20,32,1,1,6,1,6,1,2,2]}]
115: [{"id":"b33","word":"سَيِّئَة","wordEn":"Sayyiah"}]	swA			say~i}ap	سَيِّئَة	[{"r":"swA","l":["suw^'","say~i}ap","say~i_#aAt","saA^'a","sawo'ap","sawo'a`t","sawo'","say~i}",">asaA^'a","s~uw^>aY`^",">asowa>","musiY^'"],"ln":[50,22,36,30,2,5,9,4,5,1,2,1]}]
116: [{"id":"AA13","word":"نَكِرَ","wordEn":"Nakira"},{"id":"b35","word":"نَكِرَ","wordEn":"Nakira"}]	nkr			nakira	نَكِرَ	[{"r":"nkr","l":["munkar","nakira","munkiruwn","yunkiru","m~unkirap","n~ukor","nakiyr","nak~iru",">ankar","n~akiyr","n~ukur"],"ln":[18,1,3,3,1,3,4,1,1,1,1]}]
117: [{"id":"b29","word":"عَدْل","wordEn":"Adl"},{"id":"b36","word":"عَدْل","wordEn":"Adl"}]	Edl			Eadol	عَدْل	[{"r":"Edl","l":["Eadol","Eadala"],"ln":[14,14]}]
118: [{"id":"b38","word":"صَبَرَ","wordEn":"Sabara"}]	Sbr			Sabara	صَبَرَ	[{"r":"Sbr","l":["Sabor","Sabara","SaAbir","SaAbiru","SaAbirap","Sab~aAr","{SoTabiro","S~a`bira`t"],"ln":[15,58,20,1,1,4,3,1]}]
119: [{"id":"b40","word":"كِبَر","wordEn":"Kibar"}]	kbr			kibar	كِبَر	[{"r":"kbr","l":["{sotakobara","kabiyrap","kab~iro","kabiyr",">akobar","kibar","kabura","yatakab~aru","kiboriyaA^'",">akobaro","musotakobir","mutakab~ir","takobiyr","kuboraY`","kibor","kubaraA^'","{sotikobaAr","kub~aAr"],"ln":[40,7,4,40,24,6,8,2,2,1,6,7,1,7,2,1,2,1]}]
120: [{"id":"b40","word":"جَدّ","wordEn":"Jadd"}]	jdd			jad~	جَدّ	[{"r":"jdd","l":["jadiyd","judad","jad~"],"ln":[8,1,1]}]
121: [{"id":"b41","word":"عَفَا","wordEn":"Afaa"},{"id":"m33","word":"عَفَا","wordEn":"Afaa"}]	Efw			EafaA	عَفَا	[{"r":"Efw","l":["EafaA","Eafow","EaAfiyn","Eafuw~"],"ln":[27,2,1,5]}]
122: [{"id":"b41","word":"أَرْبَى","wordEn":"Ar’baa"}]	rbw			>arobaY	أَرْبَى	[{"r":"rbw","l":["rabowap","r~ibaw`A",">arobaY`","r~aAbiy","rab~aya","rabato","r~ib","r~aAbiyap"],"ln":[2,7,2,1,2,4,1,1]}]
123: [{"id":"b42","word":"قَرْيَة","wordEn":"Qarryah"}]	qry			qaroyap	قَرْيَة	[{"r":"qry","l":["qaroyap"],"ln":[57]}]
124: [{"id":"b42","word":"أَعْرَاب","wordEn":"A’a’raab"}]	Erb			>aEoraAb	أَعْرَاب	[{"r":"Erb","l":[">aEoraAb","Earabiy~","Eurub"],"ln":[10,11,1]}]
125: [{"id":"b43","word":"غَنَم","wordEn":"Ghanam"}]	gnm			ganam	غَنَم	[{"r":"gnm","l":["magaAnim","ganam","ganimo"],"ln":[4,3,2]}]
126: [{"id":"b43","word":"مَعْز","wordEn":"Ma’az"}]	Ezl,mEz			maEoz	مَعْز	[{"r":"Ezl","l":["{Eotazala","maEozil","maEozuwluwn","Eazalo"],"ln":[7,1,1,1]},{"r":"mEz","l":["maEoz"],"ln":[1]}]
127: [{"id":"b45","word":"رَفَعَ","wordEn":"Rafa’aa"},{"id":"h4","word":"رَفَعَ","wordEn":"Rafa’aa"}]	rfE			rafaEa	رَفَعَ	[{"r":"rfE","l":["rafaEa","raAfiE","rafiyE","marofuwE","r~aAfiEap","m~arofuwEap"],"ln":[22,1,1,1,1,3]}]
128: [{"id":"b46","word":"عَلَا","wordEn":"Alaa"}]	Eln			EalaA	عَلَا	[{"r":"Eln","l":[">aEolan","EalaAniyap"],"ln":[12,4]}]
129: [{"id":"b47","word":"جَعَلَ","wordEn":"Ja’a’la"}]	jEl			jaEala	جَعَلَ	[{"r":"jEl","l":["jaEala","jaAEil"],"ln":[340,6]}]
130: [{"id":"b47","word":"بَنَى","wordEn":"Banaa"}]	bny			banaY	بَنَى	[{"r":"bny","l":["binaA^'","bunaY~","{bon","banaAt","bunoya`n","banaY`","{bonat","ban~aA^'","m~aboniy~ap"],"ln":[2,80,63,17,7,11,2,1,1]}]
131: [{"id":"b51","word":"ثَقُلَ","wordEn":"Thaqula"}]	vql			vaqula	ثَقُلَ	[{"r":"vql","l":["mivoqaAl","vaqulato","vaqiyl",">avoqalat","{v~aAqalo","v~aqalaAn","muvoqalap","m~uvoqaluwn"],"ln":[8,4,5,1,1,6,1,2]}]
132: [{"id":"b52","word":"كَهْل","wordEn":"Kahl"}]	khl			kahol	كَهْل	[{"r":"khl","l":["kahol"],"ln":[2]}]
133: [{"id":"b52","word":"عَجُوز","wordEn":"Ajooz"}]	Ejz			Eajuwz	عَجُوز	[{"r":"Ejz","l":["Eajazo","muEojiz","yuEojiza","Eajuwz","muEa`jiziyn",">aEojaAz"],"ln":[1,12,4,4,3,2]}]
134: [{"id":"b52","word":"عَوَان","wordEn":"Awaan"}]	Ewn			EawaAn	عَوَان	[{"r":"Ewn","l":["{sotaEiynu","EawaAn","taEaAwanu","musotaEaAn",">aEaAna"],"ln":[4,1,2,2,2]}]
135: [{"id":"b52","word":"فَارِض","wordEn":"Faarid"}]	frD			faAriD	فَارِض	[{"r":"frD","l":["faAriD","faraDa","fariyDap","m~aforuwD"],"ln":[1,9,6,2]}]
136: [{"id":"b55","word":"أَفَاضَ","wordEn":"Afaad"},{"id":"m27","word":"أَفَاضَ","wordEn":"Afaada"}]	fyD			>afaADa	أَفَاضَ	[{"r":"fyD","l":[">afaADa","tafiyDu"],"ln":[7,2]}]
137: [{"id":"b57","word":"إِفْك","wordEn":"Ifk"}]	Afk			<ifok	إِفْك	[{"r":"Afk","l":[">ufika","mu&otafikap","<ifok",">af~aAk"],"ln":[16,3,9,2]}]
138: [{"id":"b59","word":"أَبَقَ","wordEn":"Abaqa"}]	Abq			>abaqa	أَبَقَ	[{"r":"Abq","l":[">abaqa"],"ln":[1]}]
139: [{"id":"b59","word":"زَهَقَ","wordEn":"Zahaqa"},{"id":"n22","word":"زَهَقَ","wordEn":"Zahaqa"}]	zhq			zahaqa	زَهَقَ	[{"r":"zhq","l":["zahaqa","zahuwq","zaAhiq"],"ln":[3,1,1]}]
140: [{"id":"b60","word":"إِخْوَة","wordEn":"Ikh’wah"}]	Axw			<ixowap	إِخْوَة	[{"r":"Axw","l":[">ax","<ixowapN",">uxot"],"ln":[75,7,14]}]
141: [{"id":"b62","word":"جُوع","wordEn":"Jooa"}]	jwE			juwE	جُوع	[{"r":"jwE","l":["juwE","tajuwEa"],"ln":[4,1]}]
142: [{"id":"b62","word":"مَسْغَبَة","wordEn":"Mas’ghaba"}]	sgb			masogabap	مَسْغَبَة	[{"r":"sgb","l":["masogabap"],"ln":[1]}]
143: [{"id":"b62","word":"مَخْمَصَة","wordEn":"Makh’masa"}]	xmS			maxomaSap	مَخْمَصَة	[{"r":"xmS","l":["maxomaSap"],"ln":[2]}]
144: [{"id":"b62","word":"خَصَاصَة","wordEn":"Khasaasah"}]	xSS			xaSaASap	خَصَاصَة	[{"r":"xSS","l":["yaxotaS~u","xaA^S~ap","xaSaASap"],"ln":[2,1,1]}]
145: [{"id":"b65","word":"أَرْسَلَ","wordEn":"Ar’sala"}]	rsl			>arosala	أَرْسَلَ	[{"r":"rsl","l":["rasuwl",">arosala","m~urosal","risaAlap","risa`la`t","murosilap","murosil","murosala`t"],"ln":[332,130,35,4,6,1,4,1]}]
146: [{"id":"AA7","word":"بَعَثَ","wordEn":"Ba’a’tha"},{"id":"b65","word":"بَعَثَ","wordEn":"Ba’a’tha"}]	bEv			baEava	بَعَثَ	[{"r":"bEv","l":["baEava","m~aboEuwvuwn","{nbiEaAv","baEov","{n[baEava"],"ln":[52,9,1,4,1]}]
147: [{"id":"b66","word":"ضَرَبَ","wordEn":"Daraba"},{"id":"m1","word":"ضَرَبَ","wordEn":"Daraba"}]	Drb			Daraba	ضَرَبَ	[{"r":"Drb","l":["Daraba","Darob"],"ln":[55,3]}]
148: [{"id":"b20","word":"وَلِيد","wordEn":"Waleed"},{"id":"b67","word":"وَلِيد","wordEn":"Waleed"}]	wld			waliyd	وَلِيد	[{"r":"wld","l":["waAlid","walad","wa`lida`t","mawoluwd","wa`lidap","waliyd","walada","wa`liday"],"ln":[14,56,1,3,2,7,9,10]}]
149: [{"id":"b68","word":"قَعَدَ","wordEn":"Qa’ada"}]	qEd			qaEada	قَعَدَ	[{"r":"qEd","l":["qawaAEid","maqoEad","qaEada","quEuwd","qaAEid","qaEiyd"],"ln":[3,4,12,4,7,1]}]
150: [{"id":"b69","word":"سَقِيم","wordEn":"Saqeem"}]	sqm			saqiym	سَقِيم	[{"r":"sqm","l":["saqiym"],"ln":[2]}]
151: [{"id":"b69","word":"حَرَض","wordEn":"Harad"}]	HrD			HaraD	حَرَض	[{"r":"HrD","l":["Har~iDi","HaraD"],"ln":[2,1]}]
152: [{"id":"b71","word":"عَدَلَ","wordEn":"Adala"}]	Edl			Eadala	عَدَلَ	[{"r":"Edl","l":["Eadol","Eadala"],"ln":[14,14]}]
153: [{"id":"b71","word":"ظَلَمَ","wordEn":"Zalama"},{"id":"k20","word":"ظَلَمَ","wordEn":"Zalama"}]	Zlm			Zalama	ظَلَمَ	[{"r":"Zlm","l":["Zuluma`t",">aZolama","ZaAlim","Zalama",">aZolam","Zulom","Zal~a`m","ZaAlimiY^","muZolim","ZaAlimap","Zaluwm","maZoluwm"],"ln":[23,1,129,110,16,20,5,2,2,4,2,1]}]
154: [{"id":"b71","word":"عَالَ","wordEn":"Aaala"}]	Elw			EaAla	عَالَ	[{"r":"Elw","l":["Ealiy~","taEaAla",">aEolawon","taEa`laY`","EuloyaA","EaAl","EaAliy","mutaEaAl",">aEolaY`","Euluw~","{sotaEolaY`","EaAliyn","EaAliyap","Eil~iy~iyn"],"ln":[11,8,2,20,3,1,4,1,9,4,1,2,2,2]}]
155: [{"id":"b73","word":"قَلَى","wordEn":"Qalaa"}]	qly			qalaY	قَلَى	[{"r":"qly","l":["qaAliyn","qalaY`"],"ln":[1,1]}]
156: [{"id":"b74","word":"قَدْ","wordEn":"Qadd"}]	qdr,qdH			qado	قَدْ	[{"r":"qdr","l":["qadiyr","qadar","qadara","qaAdir","qador","taqodiyr","qad~ara","miqodaAr","m~uqotadir","m~aqoduwr","quduwr"],"ln":[45,11,25,14,7,5,16,3,4,1,1]},{"r":"qdH","l":["qadoH"],"ln":[1]}]
157: [{"id":"b75","word":"فَزِعَ","wordEn":"Fazi’aa"}]	fzE			faziEa	فَزِعَ	[{"r":"fzE","l":["fazaE","faziEa","fuz~iEa"],"ln":[2,3,1]}]
158: [{"id":"b77","word":"شَقِي","wordEn":"Shaqee"}]	$qw			$aqiy	شَقِي	[{"r":"$qw","l":["$aqiy~","$aqu","$iqowat",">a$oqaY"],"ln":[4,4,1]}]
159: [{"id":"b79","word":"هَزْل","wordEn":"Hazl"}]	hzl			hazol	هَزْل	[{"r":"hzl","l":["hazol"],"ln":[1]}]
160: [{"id":"b80","word":"صَعِقَ","wordEn":"Sa’eqa"}]	SEq			SaEiqa	صَعِقَ	[{"r":"SEq","l":["SaAEiqap","SaEiq","SaEiqa"],"ln":[8,1,2]}]
161: [{"id":"b80","word":"غَمَرَ","wordEn":"Ghamara"}]	gmr			gamara	غَمَرَ	[{"r":"gmr","l":["gamara`t","gamorap"],"ln":[1,3]}]
162: [{"id":"b80","word":"غَشِيَ","wordEn":"Ghashiya"}]	g$w			ga$iya	غَشِيَ	[{"r":"g$w","l":["gi$a`wap","ga$iya","ga`$iyap",">ugo$iyato","taga$~aY`","ga$~aY`","{sotago$a","mago$iY~"],"ln":[2,13,3,4,1,3,2,1]}]
163: [{"id":"b81","word":"حَوْل","wordEn":"Hawl"}]	Hwl			Hawol	حَوْل	[{"r":"Hwl","l":["Hawol","Hiylap","HaAla","taHowiyl","Hiwal"],"ln":[17,1,3,3,1]}]
164: [{"id":"b82","word":"طَهُور","wordEn":"Tahoor"}]	Thr			Tahuwr	طَهُور	[{"r":"Thr","l":["m~uTah~arap","Tah~ara","yaTohuro","taTah~aro","mutaTah~iriyn",">aTohar","muTah~ir","muT~ah~iriyn","Tahuwr","taTohiyr","muTah~aruwn"],"ln":[5,9,1,5,1,4,1,1,2,1,1]}]
165: [{"id":"b84","word":"وَجَدَ","wordEn":"Wajada"}]	wjd			wajada	وَجَدَ	[{"r":"wjd","l":["wajada","wujod"],"ln":[106,1]}]
166: [{"id":"b84","word":"أَدْرَكَ","wordEn":"Ad’raka"}]	drk			>adoraka	أَدْرَكَ	[{"r":"drk","l":[">adoraka","d~arok","{d~a`raka","darak","mudorakuwn"],"ln":[6,1,3,1,1]}]
167: [{"id":"b85","word":"حَمِيم","wordEn":"Hameem"},{"id":"d24","wordEn":"Hameem","word":"حَمِيم","root":"Hmm"}]	Hmm			Hamiym	حَمِيم	[{"r":"Hmm","l":["Hamiym","yaHomuwm"],"ln":[20,1]}]
168: [{"id":"b85","word":"غَوْر","wordEn":"Ghawr"}]	gwr			gawor	غَوْر	[{"r":"gwr","l":["gaAr","maga`ra`t","gawor"],"ln":[1,1,2]}]
169: [{"id":"b85","word":"مَعِين","wordEn":"Maeen"}]	jmE			maEiyn	مَعِين	[{"r":"jmE","l":["jamiyE",">ajomaEiyn","jaAmiE","jamaEa","jamoE",">ajomaEu","m~ajomuwE","{jotamaEu","majomaE","m~ujotamiEuwn","jumuEap"],"ln":[53,26,3,22,13,4,2,2,2,1,1]}]
170: [{"id":"b85","word":"عَذْب","wordEn":"Ath’b"}]	E*b			Ea*ob	عَذْب	[{"r":"E*b","l":["Ea*aAb","Ea*~aba","muEa*~ib","Ea*ob","muEa*~abiyn"],"ln":[322,41,4,2,4]}]
171: [{"id":"b85","word":"فُرَات","wordEn":"Furaat"}]	frt			furaAt	فُرَات	[{"r":"frt","l":["furaAt"],"ln":[3]}]
172: [{"id":"b86","word":"أَوْدِيَة","wordEn":"Awdiyah"}]	wdy			>awodiyap	أَوْدِيَة	[{"r":"wdy","l":["diyap","waAdiy",">awodiyap","waAd"],"ln":[2,1,2,7]}]
173: [{"id":"b86","word":"عَيْن","wordEn":"Ayn"}]	tbE,Eyn			Eayon	عَيْن	[{"r":"tbE","l":["tabiEa","{t~abaEa","taAbiE","{t~ibaAE",">atobaEa","mutataAbiEayon","tabaE","tabiyE","m~ut~abaEuwn"],"ln":[9,136,3,2,15,2,2,1,2]},{"r":"Eyn","l":["Eayon","m~aEiyn","Eiyn"],"ln":[57,4,4]}]
174: [{"id":"b86","word":"سَرِي","wordEn":"Sariee"}]	xsr,srE,sry			sariy	سَرِي	[{"r":"xsr","l":["xa`siriyn","xasira","xusoraAn",">axosariyn","taxosiyr","xasaAr","muxosiriyn","yuxosiru","xusor","xaAsirap"],"ln":[32,16,3,4,1,3,1,2,2,1]},{"r":"srE","l":["sariyE","yusa`riEu",">asoraE","siraAE"],"ln":[10,9,2,2]},{"r":"sry","l":[">asoraY`","sariy~","yasori"],"ln":[6,1,1]}]
175: [{"id":"b86","word":"يَمّ","wordEn":"Yamm"}]	ymm			yam~	يَمّ	[{"r":"ymm","l":["tayam~amu","yam~"],"ln":[3,8]}]
176: [{"id":"b86","word":"بَحْر","wordEn":"Bahr"}]	bHr			baHor	بَحْر	[{"r":"bHr","l":["baHor","baHiyrap"],"ln":[41,1]}]
177: [{"id":"b88","word":"قَدَم","wordEn":"Qadam"},{"id":"q7","word":"قَدَم","wordEn":"Qadam"}]	qdm			qadam	قَدَم	[{"r":"qdm","l":["qad~ama","qadam","yasotaqodimu","qadimo","qadiym","musotaqodimiyn",">aqodamuwn","taqad~ama"],"ln":[27,8,4,2,3,1,1,2]}]
178: [{"id":"b89","word":"حَجَر","wordEn":"Hajar"}]	Hjr			Hajar	حَجَر	[{"r":"Hjr","l":["HijaArap","Hajar","Hujuwr","Hijor","m~aHojuwr","Hujura`t"],"ln":[10,2,1,5,2,1]}]
179: [{"id":"b89","word":"حِجَارَة","wordEn":"Hijaarah"}]	Hjr			HijaArap	حِجَارَة	[{"r":"Hjr","l":["HijaArap","Hajar","Hujuwr","Hijor","m~aHojuwr","Hujura`t"],"ln":[10,2,1,5,2,1]}]
180: [{"id":"b89","word":"حَصَب","wordEn":"Hasab"}]	HSb			HaSab	حَصَب	[{"r":"HSb","l":["HaASib","HaSab"],"ln":[4,1]}]
181: [{"id":"b90","word":"خَلْف","wordEn":"Khalf"},{"id":"b127","word":"خَلْف","wordEn":"Khalf"}]	xlf			xalof	خَلْف	[{"r":"xlf","l":["xaliyfap","xalof",">axolafu","{xotalafa","{xotila`f","xila`f","{sotaxolafa","m~uxotalif","xalafa","muxal~afuwn","xa`lifiyn","xawaAlif","xul~ifu","yataxal~afu","yuxaAlifu","muxolif","xilofap","m~usotaxolafiyn"],"ln":[9,22,14,35,7,6,5,10,5,4,1,2,1,1,2,1,1,1]}]
182: []	sqT			suqiTa	سُقِطَ	[{"r":"sqT","l":["suqiTa","tusoqiTa","tusa`qiTo","saAqiT"],"ln":[3,3,1,1]}]
183: [{"id":"b92","word":"قَدِيم","wordEn":"Qadeem"}]	qdm			qadiym	قَدِيم	[{"r":"qdm","l":["qad~ama","qadam","yasotaqodimu","qadimo","qadiym","musotaqodimiyn",">aqodamuwn","taqad~ama"],"ln":[27,8,4,2,3,1,1,2]}]
184: [{"id":"b92","word":"عَتِيق","wordEn":"Ateeq"}]	Etq			Eatiyq	عَتِيق	[{"r":"Etq","l":["Eatiyq"],"ln":[2]}]
185: [{"id":"b93","word":"غُلْف","wordEn":"Ghulf"}]	glf			gulof	غُلْف	[{"r":"glf","l":["gulof"],"ln":[2]}]
186: [{"id":"b93","word":"سِتْر","wordEn":"Sitr"}]	str			sitor	سِتْر	[{"r":"str","l":["m~asotuwr","sitor","tasotatiru"],"ln":[1,1,1]}]
187: [{"id":"b93","word":"حِجَاب","wordEn":"Hijaab"}]	Hjb			HijaAb	حِجَاب	[{"r":"Hjb","l":["HijaAb","maHojuwbuwn"],"ln":[7,1]}]
188: [{"id":"b93","word":"سُرَادِق","wordEn":"Suraadiq"}]	srdq			suraAdiq	سُرَادِق	[{"r":"srdq","l":["suraAdiq"],"ln":[1]}]
189: [{"id":"b96","word":"قَرَأَ","wordEn":"Qara’aa"}]	qrA			qara>a	قَرَأَ	[{"r":"qrA","l":["quro'aAn","quruw^'","qara>a","nuqori}u"],"ln":[70,1,16,1]}]
190: [{"id":"b97","word":"وَدَّ","wordEn":"Wad’da"}]	wdd,swd,wdE			wad~a	وَدَّ	[{"r":"wdd","l":["wad~a","m~awad~ap","waduwd","wud~","wad~"],"ln":[17,8,2,1,1]},{"r":"swd","l":[">asowad","say~id","{sowad~ato","musowad~","suwd","m~usowad~ap"],"ln":[1,3,2,2,1,1]},{"r":"wdE","l":["musotawodaE","daEo","wad~aEa"],"ln":[2,1,1]}]
191: [{"id":"b98","word":"دَعَا","wordEn":"Da’aa"},{"id":"d12","wordEn":"Da’aa","word":"دَعَا","root":"dEw"}]	dEw			daEaA	دَعَا	[{"r":"dEw","l":["daEaA","duEaA^'","daEowap","d~aAE","daEowaY`","daAEiY","yad~aEu"],"ln":[170,22,6,3,4,4,3]}]
192: [{"id":"b98","word":"أَذَّنَ","wordEn":"Ath’thana"}]	A*n			>a*~ana	أَذَّنَ	[{"r":"A*n","l":[">u*unN","<i*on",">a*ina",">a*~ana","mu&a*~in","ta>a*~ana",">a*a`n","{sota_#o*ana","'aA*an"],"ln":[18,39,23,3,2,2,1,12,2]}]
193: [{"id":"b98","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D1","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D2","word":"جَهَرَ","wordEn":"Jahara"}]	jhr			jahara	جَهَرَ	[{"r":"jhr","l":["jahorap","jahor","jahara","jihaAr"],"ln":[3,7,5,1]}]
194: [{"id":"b99","word":"أَخَذَ","wordEn":"Akhatha"},{"id":"l16","word":"أَخَذَ","wordEn":"Akhatha"}]	Ax*			>axa*a	أَخَذَ	[{"r":"Ax*","l":[">axa*a","{t~axa*a","{t~ixaA*","yu&aAxi*u","A^xi*","mut~axi*",">axo*"],"ln":[127,124,1,9,3,3,6]}]
195: [{"id":"b100","word":"وَزَر","wordEn":"Wazar"}]	wzr			wazar	وَزَر	[{"r":"wzr","l":["wizor","yaziru","waAzirap","waziyr","wazar"],"ln":[12,7,5,2,1]}]
196: [{"id":"b100","word":"مَفَازَة","wordEn":"Mafaazah"}]	fwz			mafaAzap	مَفَازَة	[{"r":"fwz","l":["faAza","mafaAzap","fawoz","faA^}izuwn","mafaAz"],"ln":[3,2,19,4,1]}]
197: [{"id":"b100","word":"مُلْتَحَد","wordEn":"Mul’tahad"}]	lHd			mulotaHad	مُلْتَحَد	[{"r":"lHd","l":["yuloHidu","mulotaHad","<iloHaAd"],"ln":[3,2,1]}]
198: [{"id":"b102","word":"سَأَلَ","wordEn":"Sa’a’la"},{"id":"m6","word":"سَأَلَ","wordEn":"Sa’ala"}]	sAl			sa>ala	سَأَلَ	[{"r":"sAl","l":["sa>ala","saA^}il","yatasaA^'alu","maso_#uwl","su&ol","su&aAl"],"ln":[106,7,9,5,1,1]}]
199: [{"id":"b103","word":"كُل","wordEn":"Kul"}]	kll,Akl			kul	كُل	[{"r":"kll","l":["kul~amaA","kul~","kala`lap","kal~"],"ln":[15,359,2,1]},{"r":"Akl","l":[">akala",">ukul",">akol",">ak~a`luwn","'aAkiluwn","m~a>okuwl"],"ln":[93,7,4,1,3,1]}]
200: [{"id":"b103","word":"كَامِل","wordEn":"Kaamil"}]	kml			kaAmil	كَامِل	[{"r":"kml","l":[">akomalo","kaAmilap","kaAmilayon"],"ln":[2,2,1]}]
201: [{"id":"b103","word":"سَلَم","wordEn":"Salam"}]	slm			salam	سَلَم	[{"r":"slm","l":["m~usal~amap",">asolama","musolim","m~usolimap","s~ilom","sal~ama","<isola`m","tasoliym","salam","sala`m","sul~am","s~alom","saliym","musolima`t","musotasolimuwn","sa`limuwn"],"ln":[3,22,39,1,1,6,8,3,5,42,2,2,2,2,1,1]}]
202: [{"id":"b104","word":"أَوْفَى","wordEn":"Awfaa"}]	wfy			>awofaY	أَوْفَى	[{"r":"wfy","l":[">awofaY`","muwfuwn","tawaf~aY`","waf~aY`^","mutawaf~iy",">awofaY`2","muwaf~uw","yasotawofu"],"ln":[18,1,24,18,1,2,1,1]}]
203: [{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}]	qDy			qaDaY	قَضَى	[{"r":"qDy","l":["qaDaY`^","m~aqoDiy~","qaAD","qaADiyap"],"ln":[59,2,1,1]}]
204: [{"id":"b104","word":"أَسْبَغَ","wordEn":"Ass’bagha"}]	sbg			>asobaga	أَسْبَغَ	[{"r":"sbg","l":[">asobaga","sa`biga`t"],"ln":[1,1]}]
205: [{"id":"b105","word":"لِبَاس","wordEn":"Libaas"}]	lbs			libaAs	لِبَاس	[{"r":"lbs","l":["labaso","libaAs","labuws","labos"],"ln":[11,10,1,1]}]
206: [{"id":"b106","word":"صَخْرَة","wordEn":"Sakh’rah"}]	Sxr			Saxorap	صَخْرَة	[{"r":"Sxr","l":["Saxorap","S~axor"],"ln":[2,1]}]
207: [{"id":"b107","word":"عَرَفَ","wordEn":"Arafa"}]	-,Erf			Earafa	عَرَفَ	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"Erf","l":["Earafa","m~aEoruwf",">aEoraAf","Eurof","{Eotarafu","yataEaArafu","m~aEoruwfap","Ear~afa"],"ln":[20,38,2,2,3,2,1,2]}]
208: [{"id":"b108","word":"سَابِق","wordEn":"Saabiq"}]	sbq			saAbiq	سَابِق	[{"r":"sbq","l":["{sotabaqa","sabaqa","saAbiq","masobuwqiyn","saAbiqu","s~a`biqa`t","saboq"],"ln":[5,20,7,2,1,1,1]}]
209: [{"id":"b108","word":"قَبْل","wordEn":"Qabl"}]	qbl			qabol	قَبْل	[{"r":"qbl","l":["qabol","yaqobalu","taqab~ala","qibolap","qibal","qabuwl","qubul","qabiyl",">aqobala","m~utaqa`biliyn","qaAbil","m~usotaqobil","qabaA^}il"],"ln":[242,9,10,7,4,1,3,2,9,4,1,1,1]}]
210: [{"id":"b109","word":"جَنَاح","wordEn":"Janaah"}]	jnH			janaAH	جَنَاح	[{"r":"jnH","l":["junaAH","janaAH","janaHu"],"ln":[25,7,2]}]
211: [{"id":"b109","word":"عِطْف","wordEn":"Etf"}]	ETf			EiTof	عِطْف	[{"r":"ETf","l":["EiTof"],"ln":[1]}]
212: [{"id":"b110","word":"بَلَغَ","wordEn":"Balagha"}]	blg			balaga	بَلَغَ	[{"r":"blg","l":["balaga","bala`g","baliyg","bal~ago","ba`lig","ba`ligap",">abolagu","mabolag"],"ln":[40,15,1,6,6,3,5,1]}]
213: [{"id":"b110","word":"أَصَابَ","wordEn":"Asaaba"}]	Swb			>aSaAba	أَصَابَ	[{"r":"Swb","l":["Say~ib",">aSaAba","m~uSiybap","muSiyb","SawaAb"],"ln":[1,64,10,1,1]}]
214: [{"id":"b110","word":"أَفْضَى","wordEn":"Af’daa"}]	fDw			>afoDaY	أَفْضَى	[{"r":"fDw","l":[">afoDaY`"],"ln":[1]}]
215: [{"id":"b110","word":"وَرَدَ","wordEn":"Warada"}]	wrd			warada	وَرَدَ	[{"r":"wrd","l":[">aworada","wirod","maworuwd","waArid","warada","wariyd","warodap"],"ln":[1,2,1,3,2,1,1]}]
216: [{"id":"b111","word":"أَوْرَدَ","wordEn":"Aw’rada"}]	wrd			>aworada	أَوْرَدَ	[{"r":"wrd","l":[">aworada","wirod","maworuwd","waArid","warada","wariyd","warodap"],"ln":[1,2,1,3,2,1,1]}]
217: [{"id":"b112","word":"خَرَقَ","wordEn":"Kharaqa"}]	xrq			xaraqa	خَرَقَ	[{"r":"xrq","l":["xaraqa"],"ln":[4]}]
218: [{"id":"b112","word":"فَطَرَ","wordEn":"Fatara"},{"id":"b134","word":"فَطَرَ","wordEn":"Fatara"}]	fTr			faTara	فَطَرَ	[{"r":"fTr","l":["faATir","faTara","fiTorat","fuTuwr","munfaTir","{nfaTarato"],"ln":[6,10,1,1,1,1]}]
219: [{"id":"b112","word":"فَجَرَ","wordEn":"Fajara"},{"id":"n7","word":"فَجَرَ","wordEn":"Fajara"}]	fjr			fajara	فَجَرَ	[{"r":"fjr","l":["{nfajarato","yatafaj~aru","fajor","yafojura","fuj~irato","tafojiyr","fuj~aAr","faAjir","fujuwr"],"ln":[1,1,6,2,6,2,4,1,1]}]
220: [{"id":"b112","word":"فَلَقَ","wordEn":"Falaqa"}]	flq			falaqa	فَلَقَ	[{"r":"flq","l":["faAliq","{nfalaqa","falaq"],"ln":[2,1,1]}]
221: [{"id":"b114","word":"طَافَ","wordEn":"Taafa"}]	Twf			TaAfa	طَافَ	[{"r":"Twf","l":["TaA^}if","yaT~aw~afa","TaA^}ifap","T~uwfaAn","Taw~a`fuwn","TaAfa"],"ln":[4,2,24,2,1,8]}]
222: [{"id":"b114","word":"حَارَ","wordEn":"Haara"}]	Hrb			HaAra	حَارَ	[{"r":"Hrb","l":["Harob","miHoraAb","HaAraba","m~aHa`riyb"],"ln":[4,4,2,1]}]
223: [{"id":"b114","word":"نَكَصَ","wordEn":"Nakasa"}]	nkS			nakaSa	نَكَصَ	[{"r":"nkS","l":["nakaSa"],"ln":[2]}]
224: [{"id":"b114","word":"أَدْبَرَ","wordEn":"Ad’bara"}]	dbr			>adobara	أَدْبَرَ	[{"r":"dbr","l":["dubur","yatadab~aru","daAbir","mudobir","yudab~iru","<idoba`r",">adobara","mudab~ira`t"],"ln":[18,4,4,8,4,1,4,1]}]
225: [{"id":"b115","word":"صَرَفَ","wordEn":"Sarafa"}]	Srf			Sarafa	صَرَفَ	[{"r":"Srf","l":["taSoriyf","Sarafa","Sar~afo","{nSarafu","maSoruwf","maSorif","Sarof"],"ln":[2,14,10,1,1,1,1]}]
226: [{"id":"b117","word":"جَنَى","wordEn":"Janaa"}]	jny			janaY	جَنَى	[{"r":"jny","l":["janiy~","janaY"],"ln":[1,1]}]
227: [{"id":"b119","word":"نَفَخَ","wordEn":"Nafakha"}]	nfx			nafaxa	نَفَخَ	[{"r":"nfx","l":["nafaxa","nafoxap"],"ln":[19,1]}]
228: [{"id":"b119","word":"أَطْفَأَ","wordEn":"At’fa’aa"}]	TfA			>aTofa>a	أَطْفَأَ	[{"r":"TfA","l":[">aTofa>a"],"ln":[3]}]
229: [{"id":"b120","word":"ذَرَأَ","wordEn":"Thara’aa"},{"id":"b134","word":"ذَرَأَ","wordEn":"Tha’ra’aa"}]	*rA			*ara>a	ذَرَأَ	[{"r":"*rA","l":["*ara>a"],"ln":[6]}]
230: [{"id":"b120","word":"بَسَطَ","wordEn":"Basata"},{"id":"k40","word":"بَسَطَ","wordEn":"Basata"}]	bsT			basaTa	بَسَطَ	[{"r":"bsT","l":["basaTa","baSTap","ba`siT","mabosuwTataAn","basoT","bisaAT"],"ln":[16,2,4,1,1,1]}]
231: [{"id":"b121","word":"نَبَذَ","wordEn":"Nabatha"},{"id":"dd1","wordEn":"Nabatha","word":"نَبَذَ","root":"nb*"}]	nb*			naba*a	نَبَذَ	[{"r":"nb*","l":["naba*a","{ntaba*ato"],"ln":[10,2]}]
232: [{"id":"b121","word":"قَذَفَ","wordEn":"Qathaf"},{"id":"dd1","wordEn":"Qathafa","word":"قَذَفَ","root":"q*f"}]	q*f			qa*afa	قَذَفَ	[{"r":"q*f","l":["qa*afa"],"ln":[9]}]
233: [{"id":"b122","word":"وِرْد","wordEn":"Wird"},{"id":"k66","word":"وِرْد","wordEn":"Wird"}]	wrd			wirod	وِرْد	[{"r":"wrd","l":[">aworada","wirod","maworuwd","waArid","warada","wariyd","warodap"],"ln":[1,2,1,3,2,1,1]}]
234: [{"id":"AA48","word":"هِيم","wordEn":"Jamal"},{"id":"b122","word":"هِيم","wordEn":"Heem"}]	-,bhm,hym			hiym	هِيم	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"bhm","l":["bahiymap"],"ln":[3]},{"r":"hym","l":["yahiymu","hiym"],"ln":[1,1]}]
235: [{"id":"b123","word":"أَكْوَاب","wordEn":"Ak’waab"}]	kwb			>akowaAb	أَكْوَاب	[{"r":"kwb","l":[">akowaAb"],"ln":[4]}]
236: [{"id":"b123","word":"سِقَايَة","wordEn":"Siqaayah"}]	sqy			siqaAyap	سِقَايَة	[{"r":"sqy","l":["{sotasoqaY`","saqaY`","siqaAyap",">asoqayo","suqoya`"],"ln":[2,12,2,8,1]}]
237: [{"id":"b124","word":"غِسْلِين","wordEn":"Ghis’leen"}]	gsl			gisoliyn	غِسْلِين	[{"r":"gsl","l":["tagotasilu","{gosilu","mugotasal","gisoliyn"],"ln":[1,1,1,1]}]
238: [{"id":"b90","word":"خَلْف","wordEn":"Khalf"},{"id":"b127","word":"خَلْف","wordEn":"Khalf"}]	xlf			xalof	خَلْف	[{"r":"xlf","l":["xaliyfap","xalof",">axolafu","{xotalafa","{xotila`f","xila`f","{sotaxolafa","m~uxotalif","xalafa","muxal~afuwn","xa`lifiyn","xawaAlif","xul~ifu","yataxal~afu","yuxaAlifu","muxolif","xilofap","m~usotaxolafiyn"],"ln":[9,22,14,35,7,6,5,10,5,4,1,2,1,1,2,1,1,1]}]
239: [{"id":"b130","word":"تَأَخَّرَ","wordEn":"Ta’akh’khara"}]	Axr			ta>ax~ara	تَأَخَّرَ	[{"r":"Axr","l":["A^xir","A^xar","ta>ax~ara",">ax~ara","yasota>oxiru","musota_#oxiriyn"],"ln":[155,69,3,15,6,1]}]
240: [{"id":"b130","word":"غَبَرَ","wordEn":"Ghabara"}]	gbr			gabara	غَبَرَ	[{"r":"gbr","l":["ga`biriyn","gabarap"],"ln":[7,1]}]
241: [{"id":"b132","word":"أَتْبَعَ","wordEn":"At’ba’aa"}]	tbE			>atobaEa	أَتْبَعَ	[{"r":"tbE","l":["tabiEa","{t~abaEa","taAbiE","{t~ibaAE",">atobaEa","mutataAbiEayon","tabaE","tabiyE","m~ut~abaEuwn"],"ln":[9,136,3,2,15,2,2,1,2]}]
242: [{"id":"b112","word":"فَطَرَ","wordEn":"Fatara"},{"id":"b134","word":"فَطَرَ","wordEn":"Fatara"}]	fTr			faTara	فَطَرَ	[{"r":"fTr","l":["faATir","faTara","fiTorat","fuTuwr","munfaTir","{nfaTarato"],"ln":[6,10,1,1,1,1]}]
243: [{"id":"b134","word":"خَلَقَ","wordEn":"Khalaqa"}]	xlq			xalaqa	خَلَقَ	[{"r":"xlq","l":["xalaqa","xala`q","xaloq","xa`liq","xal~a`q","muxal~aqap","xuluq","{xotila`q"],"ln":[184,6,52,12,2,2,2,1]}]
244: [{"id":"b120","word":"ذَرَأَ","wordEn":"Thara’aa"},{"id":"b134","word":"ذَرَأَ","wordEn":"Tha’ra’aa"}]	*rA			*ara>a	ذَرَأَ	[{"r":"*rA","l":["*ara>a"],"ln":[6]}]
245: [{"id":"b135","word":"عَرَضَ","wordEn":"A’rada"}]	ErD			EaraDa	عَرَضَ	[{"r":"ErD","l":["EaraDa","m~uEoriDuwn","EuroDap","Ear~aDo","EaroD",">aEoraDa","EaraD","<iEoraAD","EariyD","EaAriD"],"ln":[11,19,1,1,4,32,6,2,1,2]}]
246: [{"id":"b136","word":"جَبِين","wordEn":"Jabeen"}]	jbn			jabiyn	جَبِين	[{"r":"jbn","l":["jabiyn"],"ln":[1]}]
247: [{"id":"b136","word":"نَاصِيَة","wordEn":"Naasiyah"}]	nSy			naASiyap	نَاصِيَة	[{"r":"nSy","l":["naASiyap","n~awa`SiY"],"ln":[3,1]}]
248: [{"id":"b137","word":"رَسُول","wordEn":"Rasool"}]	rsl			rasuwl	رَسُول	[{"r":"rsl","l":["rasuwl",">arosala","m~urosal","risaAlap","risa`la`t","murosilap","murosil","murosala`t"],"ln":[332,130,35,4,6,1,4,1]}]
249: [{"id":"b138","word":"كَاهِن","wordEn":"Kaahin"}]	khn			kaAhin	كَاهِن	[{"r":"khn","l":["kaAhin"],"ln":[2]}]
250: [{"id":"b138","word":"شَاعِر","wordEn":"Shaa’er"}]	$Er			$aAEir	شَاعِر	[{"r":"$Er","l":["ya$oEuru","$aEa`^}ir","ma$oEar","yu$oEiru","$~iEor","$aAEir","$~iEoraY`"],"ln":[25,4,1,2,2,5]}]
251: [{"id":"b138","word":"مَجْنُون","wordEn":"Maj’noon"},{"id":"d36","wordEn":"Majnoon","word":"مَجْنُون","root":"jnn"}]	jnn			majonuwn	مَجْنُون	[{"r":"jnn","l":["jan~ap","jan~a","jin~","jin~ap","majonuwn","jaA^n~",">ajin~ap","jun~ap"],"ln":[147,1,22,10,11,7,1,2]}]
252: [{"id":"t1","wordEn":"Jawaari","word":"جَوَارِ"}]	jrH			jawaAri	جَوَارِ	[{"r":"jrH","l":["jawaAriH","juruwH","jaraHo","{jotaraHu"],"ln":[1,1,1,1]}]
253: [{"id":"t2","wordEn":"Ass’ass","word":"عَسْعَسَ"}]	EsEs			EasoEasa	عَسْعَسَ	[{"r":"EsEs","l":["EasoEasa"],"ln":[1]}]
254: [{"id":"t2","wordEn":"Waqab","word":"وَقَبَ"}]	wqb			waqaba	وَقَبَ	[{"r":"wqb","l":["waqaba"],"ln":[1]}]
255: [{"id":"t2","wordEn":"Az’lam","word":"أَظْلَمَ"}]	Zlm			>aZolama	أَظْلَمَ	[{"r":"Zlm","l":["Zuluma`t",">aZolama","ZaAlim","Zalama",">aZolam","Zulom","Zal~a`m","ZaAlimiY^","muZolim","ZaAlimap","Zaluwm","maZoluwm"],"ln":[23,1,129,110,16,20,5,2,2,4,2,1]}]
256: [{"id":"t3","wordEn":"Taree","word":"طَرِي"}]	Trq,Trw,qmTr			Tariy	طَرِي	[{"r":"Trq","l":["Tariyq","Tariyqap","T~aAriq"],"ln":[4,5,2]},{"r":"Trw","l":["Tariy~"],"ln":[2]},{"r":"qmTr","l":["qamoTariyr"],"ln":[1]}]
257: [{"id":"t3","wordEn":"Ratb","word":"رَطْب"},{"id":"k37","word":"رَطْب","wordEn":"Ratbb"}]	rTb			raTob	رَطْب	[{"r":"rTb","l":["raTob","ruTab"],"ln":[1,1]}]
258: [{"id":"t4","wordEn":"Kai","word":"كَيْ"}]	kyf,kyd,kyl			kayo	كَيْ	[{"r":"kyf","l":["kayof"],"ln":[83]},{"r":"kyd","l":["kayod","kiydu","makiyduwn"],"ln":[26,8,1]},{"r":"kyl","l":["kayol","mikoyaAl","{kotaAlu","kaAlu"],"ln":[10,2,2,2]}]
259: [{"id":"t5","wordEn":"Qitr","word":"قِطْر"}]	qTr			qiTor	قِطْر	[{"r":"qTr","l":["qaTiraAn","qiTor",">aqoTaAr"],"ln":[1,2,2]}]
260: [{"id":"t5","wordEn":"Muhl","word":"مُهْل"}]	hlk,mhl			muhol	مُهْل	[{"r":"hlk","l":["t~aholukap",">aholaka","halaka","muholik","haAlik","maholik","muholakiyn","muholikiY"],"ln":[1,51,5,5,2,2,1,1]},{"r":"mhl","l":["muhol","mah~ili",">amohilo"],"ln":[3,2,1]}]
261: [{"id":"t6","wordEn":"Arsh","word":"عَرْش"}]	Er$			Earo$	عَرْش	[{"r":"Er$","l":["Earo$","m~aEoruw$a`t","yaEori$u"],"ln":[29,2,2]}]
262: [{"id":"t7","wordEn":"Zubar","word":"زُبَر"}]	zbr			zubar	زُبَر	[{"r":"zbr","l":["zubur","zabuwr","zubar"],"ln":[7,3,1]}]
263: [{"id":"t8","wordEn":"Makara","word":"مَكَرَ"}]	mkr			makara	مَكَرَ	[{"r":"mkr","l":["makara","ma`kiriyn","makor"],"ln":[22,2,19]}]
264: [{"id":"t9","wordEn":"Meezaan","word":"مِيزَان"}]	wzn			miyzaAn	مِيزَان	[{"r":"wzn","l":["miyzaAn","wazon","m~awozuwn","w~azanu"],"ln":[16,3,1,3]}]
265: [{"id":"t9","wordEn":"Qiss’taass","word":"قِسْطَاس"}]	qsTs			qisoTaAs	قِسْطَاس	[{"r":"qsTs","l":["qisoTaAs"],"ln":[2]}]
266: [{"id":"t10","wordEn":"Jaaba","word":"جَابَ"}]	jwb			jaAba	جَابَ	[{"r":"jwb","l":[">ujiybat","{sotajaAba","jawaAb","m~ujiyb","jaAbu"],"ln":[8,28,4,2,1]}]
267: [{"id":"t11","wordEn":"Qadb","word":"قَضْب"}]	qDb			qaDob	قَضْب	[{"r":"qDb","l":["qaDob"],"ln":[1]}]
268: [{"id":"t11","wordEn":"Baql","word":"بَقْل"}]	bql			baqol	بَقْل	[{"r":"bql","l":["baqol"],"ln":[1]}]
269: [{"id":"t15","wordEn":"Shakara","word":"شَكَرَ"}]	$kr			$akara	شَكَرَ	[{"r":"$kr","l":["$akara","$aAkir","$akuwr","m~a$okuwr","$ukuwr","$ukor"],"ln":[46,14,10,2,2]}]
270: [{"id":"t17","wordEn":"Elaa","word":"إِلَى"}]	-			<ilaY	إِلَى	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
271: [{"id":"t18","wordEn":"Darr","word":"ضَرّ"}]	Drr,DrE,xDr			Dar~	ضَرّ	[{"r":"Drr","l":["DaA^r~","yaDur~a","{DoTur~a","Dar~aA^'","DiraAr","yuDaA^r~a","muDaA^r~","D~arar","Dar~","Dur~","muDoTar~"],"ln":[2,19,7,9,2,3,1,1,10,19,1]},{"r":"DrE","l":["yataDar~aEu","taDar~aEu","taDar~uE","DariyE"],"ln":[3,1,3,1]},{"r":"xDr","l":["xaDir","xuDor","muxoDar~ap",">axoDar"],"ln":[1,5,1,1]}]
272: [{"id":"t18","wordEn":"Durr","word":"ضُرّ"}]	Drr			Dur~	ضُرّ	[{"r":"Drr","l":["DaA^r~","yaDur~a","{DoTur~a","Dar~aA^'","DiraAr","yuDaA^r~a","muDaA^r~","D~arar","Dar~","Dur~","muDoTar~"],"ln":[2,19,7,9,2,3,1,1,10,19,1]}]
273: [{"id":"t20","wordEn":"Afaaqa","word":"أَفَاقَ"}]	fwq			>afaAqa	أَفَاقَ	[{"r":"fwq","l":["fawoq",">afaAqa","fawaAq"],"ln":[41,1,1]}]
274: [{"id":"t21","wordEn":"Faqr","word":"فَقْر"}]	fqr			faqor	فَقْر	[{"r":"fqr","l":["faqor","faqiyr","faAqirap"],"ln":[1,12,1]}]
275: [{"id":"t21","wordEn":"Mas’kanah","word":"مَسْكَنَة"}]	skn			masokanap	مَسْكَنَة	[{"r":"skn","l":["sakana","masokanap","misokiyn","sakiynap","sakan","masokan","sik~iyn",">asokan","masokuwnap","saAkin"],"ln":[15,2,23,6,3,12,1,5,1,1]}]
276: [{"id":"t21","wordEn":"Aylah","word":"عَيْلَة"}]	Eyl			Eayolap	عَيْلَة	[{"r":"Eyl","l":["Eayolap","EaA^}il"],"ln":[1,1]}]
277: [{"id":"t21","wordEn":"Qatar","word":"قَتَر"}]	qtr			qatar	قَتَر	[{"r":"qtr","l":["muqotir","qatar","qatuwr","yaqoturu","qatarap"],"ln":[1,1,1,1,1]}]
278: [{"id":"t21","wordEn":"Mat’rabah","word":"مَتْرَبَة"}]	trb			matorabap	مَتْرَبَة	[{"r":"trb","l":["turaAb",">atoraAb","t~araA^}ib","matorabap"],"ln":[17,3,1,1]}]
279: [{"id":"t22","wordEn":"Osr","word":"عُسْر"}]	Esr			Eusor	عُسْر	[{"r":"Esr","l":["Eusor","Eusorap","Easiyr","Easir","taEaAsaro","EusoraY`"],"ln":[5,2,2,1,1,1]}]
280: [{"id":"t22","wordEn":"Haraj","word":"حَرَج"}]	Hrj			Haraj	حَرَج	[{"r":"Hrj","l":["Haraj"],"ln":[15]}]
281: [{"id":"t22","wordEn":"Dayq","word":"ضَيْق"}]	Dyq			Dayoq	ضَيْق	[{"r":"Dyq","l":["Day~iq","DaAqa","DaA^}iq","Dayoq","tuDay~iqu"],"ln":[2,7,1,2,1]}]
282: [{"id":"t22","wordEn":"Haajah","word":"حَاجَة"}]	Hwj			HaAjap	حَاجَة	[{"r":"Hwj","l":["HaAjap"],"ln":[3]}]
283: [{"id":"t23","wordEn":"Daaqa","word":"ضَاقَ"}]	Dyq			DaAqa	ضَاقَ	[{"r":"Dyq","l":["Day~iq","DaAqa","DaA^}iq","Dayoq","tuDay~iqu"],"ln":[2,7,1,2,1]}]
284: [{"id":"t23","wordEn":"Qadara","word":"قَدَرَ"},{"id":"q1","word":"قَدَرَ","wordEn":"Qadara"}]	qdr			qadara	قَدَرَ	[{"r":"qdr","l":["qadiyr","qadar","qadara","qaAdir","qador","taqodiyr","qad~ara","miqodaAr","m~uqotadir","m~aqoduwr","quduwr"],"ln":[45,11,25,14,7,5,16,3,4,1,1]}]
285: [{"id":"t23","wordEn":"Hasira","word":"حَصِرَ"}]	HSr			HaSira	حَصِرَ	[{"r":"HSr","l":[">uHoSiru","HaSuwr","HaSirato","HaSiyr"],"ln":[2,1,2,1]}]
286: [{"id":"t24","wordEn":"Naqada","word":"نَقَضَ"},{"id":"q12","word":"نَقَضَ","wordEn":"Naqada"}]	nqD			naqaDa	نَقَضَ	[{"r":"nqD","l":["naqaDato","naqoD",">anqaDa"],"ln":[6,2,1]}]
287: [{"id":"t26","wordEn":"Kisaf","word":"كِسَف"}]	ksf			kisaf	كِسَف	[{"r":"ksf","l":["kisaf","kisof"],"ln":[4,1]}]
288: [{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}]	skn			sakana	سَكَنَ	[{"r":"skn","l":["sakana","masokanap","misokiyn","sakiynap","sakan","masokan","sik~iyn",">asokan","masokuwnap","saAkin"],"ln":[15,2,23,6,3,12,1,5,1,1]}]
289: [{"id":"t28","wordEn":"Sakata","word":"سَكَتَ"}]	skt			sakata	سَكَتَ	[{"r":"skt","l":["sakata"],"ln":[1]}]
290: [{"id":"t29","wordEn":"Qaleel","word":"قَلِيل"}]	qll			qaliyl	قَلِيل	[{"r":"qll","l":["qaliyl","qaliylap","qal~a",">aqal~ato","yuqal~ilu",">aqal~"],"ln":[70,1,1,1,1,2]}]
291: [{"id":"t29","wordEn":"Fateel","word":"فَتِيل"}]	ftl			fatiyl	فَتِيل	[{"r":"ftl","l":["fatiyl"],"ln":[3]}]
292: [{"id":"t29","wordEn":"Naqeer","word":"نَقِير"}]	nqr			naqiyr	نَقِير	[{"r":"nqr","l":["naqiyr","nuqira","n~aAquwr"],"ln":[2,1,1]}]
293: [{"id":"t29","wordEn":"Qit’meer","word":"قِطْمِير"}]	qTmr			qiTomiyr	قِطْمِير	[{"r":"qTmr","l":["qiTomiyr"],"ln":[1]}]
294: [{"id":"t29","wordEn":"Fawaaq","word":"فَوَاق"}]	fwq			fawaAq	فَوَاق	[{"r":"fwq","l":["fawoq",">afaAqa","fawaAq"],"ln":[41,1,1]}]
295: [{"id":"t34","wordEn":"Abasa","word":"عَبَسَ"}]	Ebs			Eabasa	عَبَسَ	[{"r":"Ebs","l":["Eabasa","Eabuws"],"ln":[2,1]}]
296: [{"id":"t34","wordEn":"Basara","word":"بَسَرَ"}]	bsr			basara	بَسَرَ	[{"r":"bsr","l":["basara","baAsirap"],"ln":[1,1]}]
297: [{"id":"tt1","wordEn":"Juz’a","word":"جُزْء"}]	jzA			juzo'	جُزْء	[{"r":"jzA","l":["juzo'"],"ln":[3]}]
298: [{"id":"tt1","wordEn":"Buq’ah","word":"بُقْعَة"}]	bqE			buqoEap	بُقْعَة	[{"r":"bqE","l":["buqoEap"],"ln":[1]}]
299: [{"id":"tt1","wordEn":"E’deen","word":"عِضِين"}]	EDw			EiDiyn	عِضِين	[{"r":"EDw","l":["EiDiyn"],"ln":[1]}]
300: [{"id":"tt1","wordEn":"Firq","word":"فِرْق"}]	frq			firoq	فِرْق	[{"r":"frq","l":["faraqo","furoqaAn","fariyq","far~aqu","tafar~aqa","taforiyq","firoqap","m~utafar~iquwn","m~utafar~iqap","firaAq","firoq","faAriqu","fa`riqa`t","faroq"],"ln":[5,7,33,9,8,1,1,1,1,2,1,1,1,1]}]
301: [{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}]	skn			sakana	سَكَنَ	[{"r":"skn","l":["sakana","masokanap","misokiyn","sakiynap","sakan","masokan","sik~iyn",">asokan","masokuwnap","saAkin"],"ln":[15,2,23,6,3,12,1,5,1,1]}]
302: [{"id":"tt5","wordEn":"Labitha","word":"لَبِثَ"}]	lbv			labiva	لَبِثَ	[{"r":"lbv","l":["labiva","l~a`biviyn"],"ln":[30,1]}]
303: [{"id":"tt5","wordEn":"Makatha","word":"مَكَثَ"}]	mkv			makava	مَكَثَ	[{"r":"mkv","l":["makava","mukov","m~a`kiviyn"],"ln":[4,1,2]}]
304: [{"id":"tt6","wordEn":"Rab’wah","word":"رَبْوَة"}]	rbw			rabowap	رَبْوَة	[{"r":"rbw","l":["rabowap","r~ibaw`A",">arobaY`","r~aAbiy","rab~aya","rabato","r~ib","r~aAbiyap"],"ln":[2,7,2,1,2,4,1,1]}]
305: [{"id":"tt6","wordEn":"Amt","word":"أَمْت"}]	Amt			>amot	أَمْت	[{"r":"Amt","l":[">amot"],"ln":[1]}]
306: [{"id":"tt6","wordEn":"Ree’a","word":"رِيع"}]	srE,$rE,DrE,ryE			riyE	رِيع	[{"r":"srE","l":["sariyE","yusa`riEu",">asoraE","siraAE"],"ln":[10,9,2,2]},{"r":"$rE","l":["$iroEap","$ur~aE","$araEa","$ariyEap"],"ln":[1,1,2]},{"r":"DrE","l":["yataDar~aEu","taDar~aEu","taDar~uE","DariyE"],"ln":[3,1,3,1]},{"r":"ryE","l":["riyE"],"ln":[1]}]
307: [{"id":"tt6","wordEn":"Ah’qaaf","word":"أَحْقَاف"}]	Hqf			>aHoqaAf	أَحْقَاف	[{"r":"Hqf","l":[">aHoqaAf"],"ln":[1]}]
308: [{"id":"tt6","wordEn":"Ewaj","word":"عِوَج"}]	Ewj			Eiwaj	عِوَج	[{"r":"Ewj","l":["Eiwaj"],"ln":[9]}]
309: [{"id":"tt6","wordEn":"Zaygh","word":"زَيْغ"}]	zyg			zayog	زَيْغ	[{"r":"zyg","l":["zayog",">azaAga","zaAga"],"ln":[1,2,6]}]
310: [{"id":"tt7","wordEn":"Jaara","word":"جَارَ"}]	Hjr,jwr			jaAra	جَارَ	[{"r":"Hjr","l":["HijaArap","Hajar","Hujuwr","Hijor","m~aHojuwr","Hujura`t"],"ln":[10,2,1,5,2,1]},{"r":"jwr","l":["jaAr","{sotajaAra","yujiyru","m~utaja`wira`t","jaA^}ir","yujaAwiru"],"ln":[3,1,6,1,1,1]}]
311: [{"id":"d1","wordEn":"Salaka","word":"سَلَك","root":"slk"}]	slk			salak	سَلَك	[{"r":"slk","l":["salaka"],"ln":[12]}]
312: [{"id":"d4","wordEn":"E’jaaf","word":"عِجَاف","root":"Ejf"}]	Ejf			EijaAf	عِجَاف	[{"r":"Ejf","l":["EijaAf"],"ln":[2]}]
313: [{"id":"AA48","word":"ضَامِر","wordEn":"Naaqah"},{"id":"d4","wordEn":"Daamir","word":"ضَامِر","root":"Dmr"}]	Dmr			DaAmir	ضَامِر	[{"r":"Dmr","l":["DaAmir"],"ln":[1]}]
314: [{"id":"d7","wordEn":"Athal","word":"أَثْل","root":"Avl"}]	Avl			>avol	أَثْل	[{"r":"Avl","l":[">avol"],"ln":[1]}]
315: [{"id":"d7","wordEn":"Yaq’teen","word":"يَقْطِين","root":"qTn"}]	-			yaqoTiyn	يَقْطِين	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
316: [{"id":"d7","wordEn":"Daree’e","word":"ضَرِيع","root":"DrE"}]	DrE			DariyE	ضَرِيع	[{"r":"DrE","l":["yataDar~aEu","taDar~aEu","taDar~uE","DariyE"],"ln":[3,1,3,1]}]
317: [{"id":"d8","wordEn":"Sawaab","word":"صَوَاب","root":"Swb"}]	Swb			SawaAb	صَوَاب	[{"r":"Swb","l":["Say~ib",">aSaAba","m~uSiybap","muSiyb","SawaAb"],"ln":[1,64,10,1,1]}]
318: [{"id":"d8","wordEn":"Haqq","word":"حَقّ","root":"Hqq"}]	Hqq			Haq~	حَقّ	[{"r":"Hqq","l":["Haq~",">aHaq~","{sotaHaq~a","Haq~a","Haqiyq","yuHiq~a","HaA^q~ap"],"ln":[247,10,2,20,1,4,3]}]
319: [{"id":"d9","wordEn":"Asslaha","word":"أَصْلَحَ","root":"SlH"}]	SlH			>aSolaHa	أَصْلَحَ	[{"r":"SlH","l":["muSoliH","S~a`liHa`t","Sa`liH",">aSolaHa","<iSola`H","SuloH","Sa`liH2","SalaHa"],"ln":[5,62,65,28,7,2,9,2]}]
320: [{"id":"d10","wordEn":"Bayn","word":"بَيْن","root":"byn"}]	byn,dAb,kEb			bayon	بَيْن	[{"r":"byn","l":["bayon","bay~anu","bay~inap","tabay~ana","m~ubiyn","bayaAn","m~ubay~inap","tasotabiyna","tiboya`n","bay~in","m~ubay~ina`t","musotabiyn","yubiynu"],"ln":[266,35,71,18,119,3,3,1,1,1,3,1,1]},{"r":"dAb","l":["da>ob","da>ab","daA^}ibayon"],"ln":[4,1,1]},{"r":"kEb","l":["kaEobayon","kaEobap","kawaAEib"],"ln":[1,2,1]}]
321: [{"id":"d10","wordEn":"Wasat","word":"وَسَط","root":"wsT"}]	wsT			wasaT	وَسَط	[{"r":"wsT","l":["wasaT","wusoTaY`",">awosaT","wasaTo"],"ln":[1,1,2,1]}]
322: [{"id":"AA25","word":"قَصْد","wordEn":"Qassd"},{"id":"d10","wordEn":"Qassd","word":"قَصْد","root":"qsd"}]	qSd			qaSod	قَصْد	[{"r":"qSd","l":["m~uqotaSidap","qaASid","qaSod","{qoSido","m~uqotaSid"],"ln":[1,1,1,1,2]}]
323: [{"id":"d11","wordEn":"Shaani’e","word":"شَانِئ","root":"$nA"}]	$nA			$aAni}	شَانِئ	[{"r":"$nA","l":["$ana_#aAn","$aAni}"],"ln":[2]}]
324: [{"id":"b98","word":"دَعَا","wordEn":"Da’aa"},{"id":"d12","wordEn":"Da’aa","word":"دَعَا","root":"dEw"}]	dEw			daEaA	دَعَا	[{"r":"dEw","l":["daEaA","duEaA^'","daEowap","d~aAE","daEowaY`","daAEiY","yad~aEu"],"ln":[170,22,6,3,4,4,3]}]
325: [{"id":"d13","wordEn":"Qalb","word":"قَلْب","root":"qlb"}]	qlb			qalob	قَلْب	[{"r":"qlb","l":["qalob","{nqalaba","taqal~ub","qal~abu","munqalibuwn","munqalab","tataqal~abu","tuqolabu","mutaqal~ab"],"ln":[132,17,5,6,3,2,1,1,1]}]
326: [{"id":"d13","wordEn":"Fu’aad","word":"فُؤَاد","root":"fAd"}]	fAd			fu&aAd	فُؤَاد	[{"r":"fAd","l":["fu&aAd"],"ln":[16]}]
327: [{"id":"d13","wordEn":"Sadrr","word":"صَدْر","root":"Sdr"}]	Sdr			Sador	صَدْر	[{"r":"Sdr","l":["Sador","yuSodira","yaSoduru"],"ln":[44,1,1]}]
328: [{"id":"d13","wordEn":"Nafss","word":"نَفْس","root":"nfs"}]	nfs			nafos	نَفْس	[{"r":"nfs","l":["nafos","tanaf~asa","yatanaAfasi","mutana`fisuwn"],"ln":[295,1,1,1]}]
329: [{"id":"d14","wordEn":"Wass’waass","word":"وَسْوَاس","root":"wsws"}]	wsws			wasowaAs	وَسْوَاس	[{"r":"wsws","l":["wasowasa","wasowaAs"],"ln":[4,1]}]
330: [{"id":"d15","wordEn":"Daleel","word":"دَلِيل","root":"dll"}]	dll			daliyl	دَلِيل	[{"r":"dll","l":["dal~a","daliyl"],"ln":[7,1]}]
331: [{"id":"d16","wordEn":"Nahaar","word":"نَهَار","root":"nhr"}]	nhr			nahaAr	نَهَار	[{"r":"nhr","l":["nahar","nahaAr","tanoharo"],"ln":[54,57,2]}]
332: [{"id":"d16","wordEn":"Yawm","word":"يَوْم","root":"ywm"}]	ywm,-			yawom	يَوْم	[{"r":"ywm","l":["yawom"],"ln":[405]},{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
333: [{"id":"d17","wordEn":"Ad’naa","word":"أَدْنَى","root":"Adn"}]	dnw			>adonaY	أَدْنَى	[{"r":"dnw","l":[">adonaY`","d~unoyaA","daAniyap","danaA","daAn"],"ln":[12,115,3,2,1]}]
334: [{"id":"d17","wordEn":"Aa’jilah","word":"عَاجِلَة","root":"Ejl"}]	Ejl			EaAjilap	عَاجِلَة	[{"r":"Ejl","l":["Eijol","taEaj~ala","{sotaEojala","Eajila","Eaj~ala","{sotiEojaAl","Eajuwl","EaAjilapN",">aEojala","Eajal"],"ln":[10,1,19,5,5,1,1,3,1,1]}]
335: [{"id":"d18","wordEn":"Ba’eed","word":"بَعِيد","root":"bEd"}]	bEd			baEiyd	بَعِيد	[{"r":"bEd","l":["baEod","baEiyd","baEudato","buEod","muboEaduwn","ba`Eido"],"ln":[199,25,2,7,1,1]}]
336: [{"id":"d18","wordEn":"Saheeq","word":"سَحِيق","root":"sHq"}]	sHq			saHiyq	سَحِيق	[{"r":"sHq","l":["saHiyq","suHoq"],"ln":[1,1]}]
337: [{"id":"d18","wordEn":"A’meeq","word":"عَمِيق","root":"Emq"},{"id":"k65","word":"عَمِيق","wordEn":"Ameeq"}]	Emq			Eamiyq	عَمِيق	[{"r":"Emq","l":["Eamiyq"],"ln":[1]}]
338: [{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}]	qDy			qaDaY	قَضَى	[{"r":"qDy","l":["qaDaY`^","m~aqoDiy~","qaAD","qaADiyap"],"ln":[59,2,1,1]}]
339: [{"id":"d20","wordEn":"Sa’aa","word":"سَعَى","root":"sEy"}]	sEy			saEaY	سَعَى	[{"r":"sEy","l":["saEaY`","saEoy"],"ln":[20,10]}]
340: [{"id":"d22","wordEn":"Jaheem","word":"جَحِيم","root":"jHm"}]	jHm			jaHiym	جَحِيم	[{"r":"jHm","l":["jaHiym"],"ln":[26]}]
341: [{"id":"d22","wordEn":"Saqarr","word":"سَقَر","root":"sqr"},{"id":"k51","word":"سَقَر","wordEn":"Saqar"}]	-			saqar	سَقَر	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
342: [{"id":"d22","wordEn":"Sa’eer","word":"سَعِير","root":"sEr"}]	sEr			saEiyr	سَعِير	[{"r":"sEr","l":["saEiyr","suEur","suE~irato"],"ln":[16,2,1]}]
343: [{"id":"d22","wordEn":"Haawiyah","word":"هَاوِيَة","root":"hwy"}]	hwy			haAwiyap	هَاوِيَة	[{"r":"hwy","l":["hawaY`",">ahowaA^'","hawaA^'","{sotahowato","haAwiyap"],"ln":[8,17,11,1,1]}]
344: [{"id":"d22","wordEn":"Ghayy","word":"غَيّ","root":"gwy"}]	gyr,gwy,gyZ			gay~	غَيّ	[{"r":"gyr","l":["gayor","yugay~iru","mugay~ir","yatagay~aro","mugiyra`t"],"ln":[147,4,1,1,1]},{"r":"gwy","l":["gay~",">agowayo","ga`wiyn","gawaY`","gawiY~"],"ln":[4,8,6,3,1]},{"r":"gyZ","l":["gayoZ","yagiyZu","tagay~uZ","gaA^}iZuwn"],"ln":[6,3,1,1]}]
345: [{"id":"d22","wordEn":"Hutamah","word":"حُطَمَة","root":"HTm"}]	HTm			HuTamap	حُطَمَة	[{"r":"HTm","l":["yaHoTima","HuTa`m","HuTamap"],"ln":[1,3,2]}]
346: [{"id":"d24","wordEn":"Qareen","word":"قَرِين","root":"qrn"},{"id":"h10","word":"قَرِين","wordEn":"Qareen"}]	qrn			qariyn	قَرِين	[{"r":"qrn","l":["qariyn","qaron","m~uqar~aniyn","muqoriniyn","muqotariniyn"],"ln":[8,23,3,1,1]}]
347: [{"id":"d24","wordEn":"Rafeeq","word":"رَفِيق","root":"rfq"}]	rfq			rafiyq	رَفِيق	[{"r":"rfq","l":["rafiyq","maraAfiq","m~irofaq","murotafaq"],"ln":[1,1,1,2]}]
348: [{"id":"d24","wordEn":"Khaleel","word":"خَلِيل","root":"xll"}]	xll			xaliyl	خَلِيل	[{"r":"xll","l":["xul~ap","xaliyl","xila`l"],"ln":[1,4,8]}]
349: [{"id":"b85","word":"حَمِيم","wordEn":"Hameem"},{"id":"d24","wordEn":"Hameem","word":"حَمِيم","root":"Hmm"}]	Hmm			Hamiym	حَمِيم	[{"r":"Hmm","l":["Hamiym","yaHomuwm"],"ln":[20,1]}]
350: [{"id":"d24","wordEn":"Waleejah","word":"وَلِيجَة","root":"wlj"}]	wlj			waliyjap	وَلِيجَة	[{"r":"wlj","l":["yuwliju","yalija","waliyjap"],"ln":[10,3,1]}]
351: [{"id":"d24","wordEn":"Bitaanah","word":"بِطَانَة","root":"bTn"}]	bTn			biTaAnap	بِطَانَة	[{"r":"bTn","l":["baTon","biTaAnap","baATin","baTana","baATinap"],"ln":[17,2,3,2,1]}]
352: [{"id":"d24","wordEn":"Khathool","word":"خَذُول","root":"x*l"}]	x*l			xa*uwl	خَذُول	[{"r":"x*l","l":["yaxo*ulo","m~axo*uwl","xa*uwl"],"ln":[1,1,1]}]
353: [{"id":"d24","wordEn":"Akh’daan","word":"أَخْدَان","root":"xdn"}]	xdn			>axodaAn	أَخْدَان	[{"r":"xdn","l":[">axodaAn"],"ln":[2]}]
354: [{"id":"d27","wordEn":"Dukh’khaan","word":"دُخَان","root":"dxn"}]	dxn			duxaAn	دُخَان	[{"r":"dxn","l":["duxaAn"],"ln":[2]}]
355: [{"id":"d27","wordEn":"Nuhaass","word":"نُحَاس","root":"nHs"}]	nHs			nuHaAs	نُحَاس	[{"r":"nHs","l":["n~aHisaAt","naHos","nuHaAs"],"ln":[1,1,1]}]
356: [{"id":"d27","wordEn":"Yah’moom","word":"يَحْمُوم","root":"Hmm"}]	Hmm			yaHomuwm	يَحْمُوم	[{"r":"Hmm","l":["Hamiym","yaHomuwm"],"ln":[20,1]}]
357: [{"id":"d28","wordEn":"Shamss","word":"شَمْس","root":"$ms"}]	$ms			$amos	شَمْس	[{"r":"$ms","l":["$amos"],"ln":[]}]
358: [{"id":"d28","wordEn":"Haroor","word":"حَرُور","root":"Hrr"}]	Hrr			Haruwr	حَرُور	[{"r":"Hrr","l":["Hur~","muHar~ar","taHoriyr","Har~","Hariyr","Haruwr"],"ln":[2,1,5,3,3,1]}]
359: [{"id":"d29","wordEn":"Raagha","word":"رَاغَ","root":"rwg"}]	rwg			raAga	رَاغَ	[{"r":"rwg","l":["raAga"],"ln":[3]}]
360: []	Ans			Anasa	انَسَ	[{"r":"Ans","l":["<insa`n","'aAnasa","<ins","<insiy~","tasota>onisu","musota_#onisiyn"],"ln":[71,5,18,1,1,1]}]
361: [{"id":"d31","wordEn":"Zaagha","word":"زَاغَ","root":"zAg"}]	zyg			zaAga	زَاغَ	[{"r":"zyg","l":["zayog",">azaAga","zaAga"],"ln":[1,2,6]}]
362: [{"id":"d31","wordEn":"Bariqa","word":"بَرِقَ","root":"brq"}]	brq			bariqa	بَرِقَ	[{"r":"brq","l":["baroq","bariqa"],"ln":[5,1]}]
363: [{"id":"d32","wordEn":"Tabarraj","word":"تَبَرَّج","root":"brj"}]	brj			tabar~aj	تَبَرَّج	[{"r":"brj","l":["buruwj","mutabar~ija`t","tabar~ajo","tabar~uj"],"ln":[4,1,1,1]}]
364: [{"id":"d33","wordEn":"Sahree’ah","word":"شَرِيعَة","root":"$rE"},{"id":"T3","word":"شَرِيعَة","wordEn":"Sharee’ah"}]	$rE			$ariyEap	شَرِيعَة	[{"r":"$rE","l":["$iroEap","$ur~aE","$araEa","$ariyEap"],"ln":[1,1,2]}]
365: [{"id":"A25","word":"أَتَى","wordEn":"Ataa"},{"id":"d34","wordEn":"Ataa","word":"أَتَى","root":"Aty"}]	Aty			>ataY	أَتَى	[{"r":"Aty","l":[">ataY","A^taY","mu&otuwn","A^tiy","<iytaA'N","ma>otiy~N"],"ln":[264,271,1,9,3,1]}]
366: [{"id":"d34","wordEn":"A’ataa","word":"أَعْطَى","root":"ETw"}]	ETw			>aEoTaY	أَعْطَى	[{"r":"ETw","l":[">aEoTaY`","EaTaA^'","taEaATaY`"],"ln":[8,5,1]}]
367: [{"id":"d34","wordEn":"Deeyah","word":"دِيَة","root":"wdy"}]	wdy,Sdy			diyap	دِيَة	[{"r":"wdy","l":["diyap","waAdiy",">awodiyap","waAd"],"ln":[2,1,2,7]},{"r":"Sdy","l":["taSodiyap","taSad~aY`"],"ln":[1,1]}]
368: [{"id":"d34","wordEn":"Wahaba","word":"وَهَبَ","root":"whb"}]	whb			wahaba	وَهَبَ	[{"r":"whb","l":["wahaba","wah~aAb"],"ln":[22,3]}]
369: [{"id":"t17","wordEn":"Elaa","word":"إِلَى"}]	-			<ilaY	إِلَى	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
370: [{"id":"d35","wordEn":"Jidaar","word":"جِدَار","root":"jdr"}]	jdr			jidaAr	جِدَار	[{"r":"jdr","l":[">ajodar","jidaAr","judur"],"ln":[1,2,1]}]
371: [{"id":"d35","wordEn":"Sadd","word":"سَدّ","root":"sdd"}]	sdd			sad~	سَدّ	[{"r":"sdd","l":["sadiyd","sad~"],"ln":[2,4]}]
372: [{"id":"d35","wordEn":"Radm","word":"رَدْم","root":"rdm"}]	rdm			radom	رَدْم	[{"r":"rdm","l":["radom"],"ln":[1]}]
373: [{"id":"d35","wordEn":"Soor","word":"سُور","root":"swr"}]	swr,Hsr,ysr			suwr	سُور	[{"r":"swr","l":["suwrap",">asaAwir","tasaw~aru","suwr"],"ln":[10,5,1,1]},{"r":"Hsr","l":["Hasorap","Hasorat","m~aHosuwr","yasotaHosiru","HasorataY`","Hasiyr"],"ln":[7,1,1,1,1,1]},{"r":"ysr","l":["yusor","{sotayosara","mayosir","mayosarap","yasiyr","m~ayosuwr","yas~ara","tayas~ara","yusoraY`"],"ln":[7,2,3,1,15,1,11,2,2]}]
374: [{"id":"b138","word":"مَجْنُون","wordEn":"Maj’noon"},{"id":"d36","wordEn":"Majnoon","word":"مَجْنُون","root":"jnn"}]	jnn			majonuwn	مَجْنُون	[{"r":"jnn","l":["jan~ap","jan~a","jin~","jin~ap","majonuwn","jaA^n~",">ajin~ap","jun~ap"],"ln":[147,1,22,10,11,7,1,2]}]
375: [{"id":"d36","wordEn":"Maftoon","word":"مَفْتُون","root":"ftn"}]	ftn			mafotuwn	مَفْتُون	[{"r":"ftn","l":["fitonap","fatanu","futuwn","fa`tiniyn","mafotuwn"],"ln":[34,23,1,1,1]}]
376: [{"id":"d36","wordEn":"Su’or","word":"سُعُر","root":"sEr"}]	sEr			suEur	سُعُر	[{"r":"sEr","l":["saEiyr","suEur","suE~irato"],"ln":[16,2,1]}]
377: [{"id":"dd1","wordEn":"Alqaa","word":"أَلْقَى","root":"lqy"}]	lqy			>aloqaY	أَلْقَى	[{"r":"lqy","l":["laqu","talaq~aY`^","m~ula`quwA",">aloqaY`^","{lotaqaY","liqaA^'","tiloqaA^'","m~uloquwn","laq~aY`","la`qiy","t~alaAq","yula`qu","mutalaq~iyaAn","mula`qiy","mula`q","muloqiya`t"],"ln":[14,4,4,71,7,24,3,3,6,1,1,3,1,2,1,1]}]
378: [{"id":"dd1","wordEn":"Salaka","word":"سَلَكَ","root":"slk"}]	slk			salaka	سَلَكَ	[{"r":"slk","l":["salaka"],"ln":[12]}]
379: [{"id":"b121","word":"نَبَذَ","wordEn":"Nabatha"},{"id":"dd1","wordEn":"Nabatha","word":"نَبَذَ","root":"nb*"}]	nb*			naba*a	نَبَذَ	[{"r":"nb*","l":["naba*a","{ntaba*ato"],"ln":[10,2]}]
380: [{"id":"b121","word":"قَذَفَ","wordEn":"Qathaf"},{"id":"dd1","wordEn":"Qathafa","word":"قَذَفَ","root":"q*f"}]	q*f			qa*afa	قَذَفَ	[{"r":"q*f","l":["qa*afa"],"ln":[9]}]
381: [{"id":"dd3","wordEn":"Khaafa","word":"خَافَ","root":"xwf"}]	xwf			xaAfa	خَافَ	[{"r":"xwf","l":["xawof","xaA^}if","xaAfa","yuxaw~ifu","xiyfap","taxaw~uf","taxowiyf"],"ln":[26,3,83,4,6,1,1]}]
382: [{"id":"dd3","wordEn":"Khasha’aa","word":"خَشَعَ","root":"x$E"},{"id":"n31","word":"خَشَعَ","wordEn":"Khasha’aa"},{"id":"E2","word":"خَشَعَ","wordEn":"Khasha’aa"}]	x$E			xa$aEa	خَشَعَ	[{"r":"x$E","l":["xaA$iE","xu$uwE","xa$aEati"],"ln":[14,1,2]}]
383: [{"id":"A24","word":"حِذْر","wordEn":"Hithir"},{"id":"dd3","wordEn":"Hithrr","word":"حِذْر","root":"H*r"}]	H*r			Hi*or	حِذْر	[{"r":"H*r","l":["Ha*ar","yaHo*aru","yuHa*~iru","Hi*or","maHo*uwr","Ha`*iruwn"],"ln":[2,12,2,3,1,1]}]
384: [{"id":"dd3","wordEn":"Awjasa","word":"أَوْجَسَ","root":"wjs"}]	wjs			>awojasa	أَوْجَسَ	[{"r":"wjs","l":[">awojasa"],"ln":[3]}]
385: [{"id":"dd5","wordEn":"Dal’oo","word":"دَلْو","root":"dlw"}]	dlw			dalow	دَلْو	[{"r":"dlw","l":[">adolaY`","dalow","tadal~aY`"],"ln":[2,1,1]}]
386: [{"id":"dd5","wordEn":"Thanoob","word":"ذَنُوب","root":"*nb"}]	*nb			*anuwb	ذَنُوب	[{"r":"*nb","l":["*anb","*anuwb"],"ln":[37,2]}]
387: [{"id":"dd6","wordEn":"Ur’dah","word":"عُرْضَة","root":"ErD"}]	ErD			EuroDap	عُرْضَة	[{"r":"ErD","l":["EaraDa","m~uEoriDuwn","EuroDap","Ear~aDo","EaroD",">aEoraDa","EaraD","<iEoraAD","EariyD","EaAriD"],"ln":[11,19,1,1,4,32,6,2,1,2]}]
388: [{"id":"dd8","wordEn":"Zaala","word":"زَال","root":"zwl"}]	zlzl,zyl,zwl			zaAl	زَال	[{"r":"zlzl","l":["zulozilu","zalozalap","zilozaAl"],"ln":[3,1,2]},{"r":"zyl","l":["zaAlat","zay~alo","tazay~alu"],"ln":[8,1,1]},{"r":"zwl","l":["zawaAl","zaAla"],"ln":[1,3]}]
389: [{"id":"dd9","wordEn":"Buothira","word":"بُعْثِرَ","root":"bEv"}]	bEvr			buEovira	بُعْثِرَ	[{"r":"bEvr","l":["buEovira"],"ln":[2]}]
390: [{"id":"y2","word":"حَفِظَ","wordEn":"Hafiza"}]	HfZ			HafiZa	حَفِظَ	[{"r":"HfZ","l":["yuHaAfiZu","HifoZ","Ha`fiZa`t","HafiZa","HafiyZ","{sotuHofiZu","Ha`fiZ","m~aHofuwZ"],"ln":[4,3,2,7,12,1,13,2]}]
391: [{"id":"w1","word":"جَمّ","wordEn":"Jamm"}]	jmm			jam~	جَمّ	[{"r":"jmm","l":["jam~"],"ln":[1]}]
392: [{"id":"w1","word":"رَغَد","wordEn":"Raghad"}]	rgd			ragad	رَغَد	[{"r":"rgd","l":["ragad"],"ln":[3]}]
393: [{"id":"w1","word":"غَدَق","wordEn":"Ghadaq"}]	gdq			gadaq	غَدَق	[{"r":"gdq","l":["gadaq"],"ln":[1]}]
394: [{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}]	Ahl,hlk			>ahol	أَهْل	[{"r":"Ahl","l":[">ahol"],"ln":[127]},{"r":"hlk","l":["t~aholukap",">aholaka","halaka","muholik","haAlik","maholik","muholakiyn","muholikiY"],"ln":[1,51,5,5,2,2,1,1]}]
395: [{"id":"w4","word":"أَجَل","wordEn":"Ajal"}]	Ajl			>ajal	أَجَل	[{"r":"Ajl","l":[">ajal","m~u&aj~al",">ajol",">aj~ala"],"ln":[52,1,1,2]}]
396: [{"id":"h1","word":"يَمِين","wordEn":"Yameen"},{"id":"l15","word":"يَمِين","wordEn":"Yameen"},{"id":"q11","word":"يَمِين","wordEn":"Yameen"}]	ymn			yamiyn	يَمِين	[{"r":"ymn","l":["yamiyn",">ayoman","mayomanap"],"ln":[65,3,3]}]
397: [{"id":"h1","word":"ذِرَاع","wordEn":"Thiraa’a"}]	*rE			*iraAE	ذِرَاع	[{"r":"*rE","l":["*aroE","*iraAE"],"ln":[3,2]}]
398: [{"id":"h2","word":"بَلَى","wordEn":"Balaa"},{"id":"n28","word":"بَلَى","wordEn":"Balaa"}]	-			balaY	بَلَى	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
399: [{"id":"b45","word":"رَفَعَ","wordEn":"Rafa’aa"},{"id":"h4","word":"رَفَعَ","wordEn":"Rafa’aa"}]	rfE			rafaEa	رَفَعَ	[{"r":"rfE","l":["rafaEa","raAfiE","rafiyE","marofuwE","r~aAfiEap","m~arofuwEap"],"ln":[22,1,1,1,1,3]}]
400: [{"id":"h7","word":"بَادَ","wordEn":"Baada"}]	Ebd			baAda	بَادَ	[{"r":"Ebd","l":["Eabada","Eabod","EaAbid","EibaAdat","Eab~ad","Ea`bida`t"],"ln":[122,131,11,9,1,1]}]
401: [{"id":"h7","word":"دَمْدَمَ","wordEn":"Damdama"}]	dmdm			damodama	دَمْدَمَ	[{"r":"dmdm","l":["damodama"],"ln":[1]}]
402: [{"id":"h7","word":"بَارَ","wordEn":"Baara"}]	brk			baAra	بَارَ	[{"r":"brk","l":["mubaArak","tabaAraka","baraka`t","ba`raka","m~uba`rakap"],"ln":[8,9,3,8,4]}]
403: [{"id":"h8","word":"خَفّ","wordEn":"Khaffa"}]	xff			xaf~	خَفّ	[{"r":"xff","l":["xaf~afa","taxofiyf","xaf~ato","xafiyf","{sotaxaf~a"],"ln":[8,1,3,2,3]}]
404: [{"id":"d24","wordEn":"Qareen","word":"قَرِين","root":"qrn"},{"id":"h10","word":"قَرِين","wordEn":"Qareen"}]	qrn			qariyn	قَرِين	[{"r":"qrn","l":["qariyn","qaron","m~uqar~aniyn","muqoriniyn","muqotariniyn"],"ln":[8,23,3,1,1]}]
405: [{"id":"h10","word":"أَتْرَاب","wordEn":"Atraab"}]	trb			>atoraAb	أَتْرَاب	[{"r":"trb","l":["turaAb",">atoraAb","t~araA^}ib","matorabap"],"ln":[17,3,1,1]}]
406: [{"id":"h10","word":"سَمِيّ","wordEn":"Sameey"}]	smw			samiy~	سَمِيّ	[{"r":"smw","l":["{som","samaA^'","m~usam~FY","sam~aY`","samiy~","tasomiyap"],"ln":[39,310,21,8,2,1]}]
407: [{"id":"h10","word":"صَفّ","wordEn":"Saff"}]	Sfw,Sff			Saf~	صَفّ	[{"r":"Sfw","l":["{SoTafaY`","SafowaAn",">aSofaY`","muSoTafayon","m~uSaf~FY"],"ln":[12,1,2,1,1]},{"r":"Sff","l":["Saf~","SawaA^f~","Sa`^f~a`t","S~aA^f~uwn","maSofuwfap"],"ln":[7,1,3,1,2]}]
408: [{"id":"h11","word":"فَشِل","wordEn":"Fashil"}]	f$l			fa$il	فَشِل	[{"r":"f$l","l":["fa$ilo"],"ln":[4]}]
409: [{"id":"h13","word":"سَرْمَد","wordEn":"Sarrmad"}]	srmd			saromad	سَرْمَد	[{"r":"srmd","l":["saromad"],"ln":[2]}]
410: [{"id":"h13","word":"أَبَد","wordEn":"Abad"}]	Abd			>abad	أَبَد	[{"r":"Abd","l":[">abadFA"],"ln":[28]}]
411: [{"id":"h14","word":"دَامَ","wordEn":"Daama"}]	ndm			daAma	دَامَ	[{"r":"ndm","l":["na`dimiyn","n~adaAmap"],"ln":[5,2]}]
412: [{"id":"h14","word":"زَالَ","wordEn":"Zaala"}]	zyl,zwl			zaAla	زَالَ	[{"r":"zyl","l":["zaAlat","zay~alo","tazay~alu"],"ln":[8,1,1]},{"r":"zwl","l":["zawaAl","zaAla"],"ln":[1,3]}]
413: [{"id":"h14","word":"أَبْرَحَ","wordEn":"Abraha"}]	brH			>aboraHa	أَبْرَحَ	[{"r":"brH","l":[">aboraHa"],"ln":[3]}]
414: [{"id":"h15","word":"ضَحِكَ","wordEn":"Dahika"}]	DHk			DaHika	ضَحِكَ	[{"r":"DHk","l":["DaHikato","DaAHik",">aDoHaka","DaAHikap"],"ln":[7,1,1,1]}]
415: [{"id":"h16","word":"عَاصِف","wordEn":"Aaasif"}]	ESf			EaASif	عَاصِف	[{"r":"ESf","l":["EaASif","EaASifap","EaSof","Ea`Sifa`t","EaSof2"],"ln":[2,1,2,1,1]}]
416: [{"id":"h16","word":"قَاصِف","wordEn":"Qaasif"}]	qSf			qaASif	قَاصِف	[{"r":"qSf","l":["qaASif"],"ln":[1]}]
417: [{"id":"h16","word":"حَاصِب","wordEn":"Haasib"},{"id":"E7","word":"حَاصِب","wordEn":"Haasib"}]	HSb			HaASib	حَاصِب	[{"r":"HSb","l":["HaASib","HaSab"],"ln":[4,1]}]
418: [{"id":"h16","word":"سَمُوم","wordEn":"Samoom"},{"id":"k51","word":"سَمُوم","wordEn":"Samoom"}]	smm			samuwm	سَمُوم	[{"r":"smm","l":["sam~","samuwm"],"ln":[1,3]}]
419: [{"id":"h16","word":"إِعْصَار","wordEn":"Eesaar"}]	ESr			<iEoSaAr	إِعْصَار	[{"r":"ESr","l":["<iEoSaAr","yaEoSiru","muEoSira`t","EaSor"],"ln":[1,2,1,1]}]
420: [{"id":"h16","word":"حُسْبَان","wordEn":"Hussbaan"},{"id":"E7","word":"حُسْبَان","wordEn":"Husbaan"}]	Hsb			HusobaAn	حُسْبَان	[{"r":"Hsb","l":["HisaAb","Hasob","Hasiba","HaAsabo","Hasiyb","Ha`sibiyn","HusobaAn","yaHotasibu"],"ln":[39,11,44,3,4,2,3,3]}]
421: [{"id":"h16","word":"نَفْحَة","wordEn":"Nafhah"}]	nfH			nafoHap	نَفْحَة	[{"r":"nfH","l":["nafoHap"],"ln":[1]}]
422: [{"id":"h16","word":"صَرْصَر","wordEn":"Sarsar"}]	SrSr			SaroSar	صَرْصَر	[{"r":"SrSr","l":["SaroSar"],"ln":[3]}]
423: []	Eqm			Eaqiym	عَقِيم	[{"r":"Eqm","l":["Eaqiym"],"ln":[4]}]
424: [{"id":"h17","word":"كَان","wordEn":"Kaana"}]	kwn,kyn			kaAn	كَان	[{"r":"kwn","l":["kaAna","m~akaAn","makaAnat"],"ln":[1358,27,5]},{"r":"kyn","l":["{sotakaAnu"],"ln":[2]}]
425: [{"id":"h17","word":"أَصْبَحَ","wordEn":"Assbaha"}]	SbH			>aSobaHa	أَصْبَحَ	[{"r":"SbH","l":[">aSobaHa","<iSobaAH","SuboH","muSobiHiyn","miSobaAH","SabaAH","Sab~aHa"],"ln":[28,1,5,5,4,1,1]}]
426: [{"id":"h17","word":"وَقَعَ","wordEn":"Waqa’aa"},{"id":"k53","word":"وَقَعَ","wordEn":"Waqa’aa"}]	wqE			waqaEa	وَقَعَ	[{"r":"wqE","l":["waqaEa","yuwqiEa","waAqiE","m~uwaAqiEuw","waAqiEap","waqoEat","mawa`qiE"],"ln":[12,1,6,1,2,1,1]}]
427: [{"id":"n2","word":"رِجْس","wordEn":"Rijss"},{"id":"k62","word":"رِجْس","wordEn":"Rijss"}]	rjs			rijos	رِجْس	[{"r":"rjs","l":["rijos"],"ln":[10]}]
428: [{"id":"n2","word":"خَبِيث","wordEn":"Khabeeth"}]	xbv			xabiyv	خَبِيث	[{"r":"xbv","l":["xabiyv","xabuva","xabiyvap","xabiyva`t"],"ln":[9,1,4,2]}]
429: [{"id":"n3","word":"مَكْرُوه","wordEn":"Makrooh"}]	krh			makoruwh	مَكْرُوه	[{"r":"krh","l":["kuroh","kariha","<ikoraAh","karoh","ka`rihuwn",">ukoriha","makoruwh","kar~aha"],"ln":[3,17,2,5,7,5,1,1]}]
430: [{"id":"n3","word":"إِدّ","wordEn":"Edd"}]	Add			<id~	إِدّ	[{"r":"Add","l":["<id~"],"ln":[1]}]
431: [{"id":"n3","word":"إِمْر","wordEn":"Emrr"}]	Amr			<imor	إِمْر	[{"r":"Amr","l":[">amara",">amor","'aAmiruwn",">am~aArap","<imor","ya>otamiru"],"ln":[77,166,1,1,1,2]}]
432: [{"id":"n3","word":"أُفّ","wordEn":"Off"}]	Aff			>uf~	أُفّ	[{"r":"Aff","l":[">uf~"],"ln":[3]}]
433: [{"id":"n4","word":"جَاهِل","wordEn":"Jaahil"}]	jhl			jaAhil	جَاهِل	[{"r":"jhl","l":["jaAhil","ja`hiliy~ap","jaha`lap","ja`hiliy~ap2","yajohalu","jahuwl"],"ln":[10,1,4,3,5,1]}]
434: [{"id":"n5","word":"غِلّ","wordEn":"Ghill"}]	gll			gil~	غِلّ	[{"r":"gll","l":["gal~a","magoluwlap","gil~"],"ln":[5,2,9]}]
435: [{"id":"n6","word":"كَفُور","wordEn":"Kafoor"}]	kfr			kafuwr	كَفُور	[{"r":"kfr","l":["kafara","ka`firuwn","kaAfir","kufor","kaf~ara","kaf~aAr","kaAfirap","kaf~a`rap","kafuwr","kufuwr","kuforaAn","kawaAfir","kaAfuwr",">akofara"],"ln":[289,129,27,37,14,5,1,4,12,3,1,1,1,1]}]
436: [{"id":"n6","word":"كَنُود","wordEn":"Kanood"}]	knd			kanuwd	كَنُود	[{"r":"knd","l":["kanuwd"],"ln":[1]}]
437: [{"id":"n7","word":"فَسَقَ","wordEn":"Fasaqa"}]	fsq			fasaqa	فَسَقَ	[{"r":"fsq","l":["faAsiq","fasaqa","fusuwq","fisoq"],"ln":[37,10,4,3]}]
438: [{"id":"b112","word":"فَجَرَ","wordEn":"Fajara"},{"id":"n7","word":"فَجَرَ","wordEn":"Fajara"}]	fjr			fajara	فَجَرَ	[{"r":"fjr","l":["{nfajarato","yatafaj~aru","fajor","yafojura","fuj~irato","tafojiyr","fuj~aAr","faAjir","fujuwr"],"ln":[1,1,6,2,6,2,4,1,1]}]
439: [{"id":"n8","word":"خُرْطُوم","wordEn":"Kharrtoom"}]	xrTm			xuroTuwm	خُرْطُوم	[{"r":"xrTm","l":["xuroTuwm"],"ln":[1]}]
440: [{"id":"n10","word":"نَحْس","wordEn":"Nahss"}]	nHs			naHos	نَحْس	[{"r":"nHs","l":["n~aHisaAt","naHos","nuHaAs"],"ln":[1,1,1]}]
441: [{"id":"b24","word":"حُسُوم","wordEn":"Hosoom"},{"id":"n10","word":"حُسُوم","wordEn":"Husoom"},{"id":"l12","word":"حُسُوم","wordEn":"Hussom"}]	Hsm			Husuwm	حُسُوم	[{"r":"Hsm","l":["Husuwm"],"ln":[1]}]
442: [{"id":"n11","word":"فَازَ","wordEn":"Faaza"},{"id":"k7","word":"فَازَ","wordEn":"Faaza"}]	fwz			faAza	فَازَ	[{"r":"fwz","l":["faAza","mafaAzap","fawoz","faA^}izuwn","mafaAz"],"ln":[3,2,19,4,1]}]
443: [{"id":"n12","word":"قُرْبَان","wordEn":"Qurbaan"}]	qrb			qurobaAn	قُرْبَان	[{"r":"qrb","l":["yaqorabu","qurobaY`",">aqorab","qariyb","muqar~abuwn","qurobaAn","qar~aba","{qotaraba","quruba`t","qurobap","maqorabap"],"ln":[11,16,19,26,8,3,5,5,1,1,1]}]
444: [{"id":"n14","word":"كَادَ","wordEn":"Kaada"}]	kwd			kaAda	كَادَ	[{"r":"kwd","l":["kaAda"],"ln":[24]}]
445: [{"id":"n14","word":"أَزِفَ","wordEn":"Aziff"}]	Azf			>azifa	أَزِفَ	[{"r":"Azf","l":["'aAzifap",">azifati"],"ln":[2,1]}]
446: [{"id":"n15","word":"أَثَر","wordEn":"Athar"},{"id":"q7","word":"أَثَر","wordEn":"Athar"}]	Avr			>avar	أَثَر	[{"r":"Avr","l":[">avar","A^vara",">ava`rap","yu&ovaru"],"ln":[14,5,1,1]}]
447: []	Ayy,sqy			Ayap	ايَة	[{"r":"Ayy","l":["'aAyap"],"ln":[382]},{"r":"sqy","l":["{sotasoqaY`","saqaY`","siqaAyap",">asoqayo","suqoya`"],"ln":[2,12,2,8,1]}]
448: [{"id":"n15","word":"مُبْصِرَة","wordEn":"Mubsirah"}]	bSr			muboSirap	مُبْصِرَة	[{"r":"bSr","l":["baSar",">aboSara","baSiyr","baSiyrap","muboSir","muboSirap","baSurato","musotaboSiriyn","taboSirap","yubaS~aru"],"ln":[48,29,51,7,4,3,3,1,1,1]}]
449: [{"id":"n17","word":"ذَكَرَ","wordEn":"Thakara"}]	*kr			*akara	ذَكَرَ	[{"r":"*kr","l":["*akara","*ikor","ta*ak~ara","*uk~ira","*akar","*ikoraY`","ta*okiyr","*~a`kiriyn","{d~akara","ta*okirap","*~a`kira`t","m~ud~akir","m~a*okuwr","mu*ak~ir"],"ln":[84,76,51,18,18,23,1,2,1,9,1,6,1,1]}]
450: [{"id":"n18","word":"نِعْمَة","wordEn":"Niemah"}]	nEm			niEomap	نِعْمَة	[{"r":"nEm","l":[">anoEama","niEomap","niEoma","n~aEam","naEiym","naEomaA^'","n~aEomap","n~aAEimap","naE~ama"],"ln":[17,50,18,33,17,1,2,1,1]}]
451: [{"id":"AA14","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n19","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n34","word":"أَنْعَمَ","wordEn":"An’ama"}]	nEm			>anoEama	أَنْعَمَ	[{"r":"nEm","l":[">anoEama","niEomap","niEoma","n~aEam","naEiym","naEomaA^'","n~aEomap","n~aAEimap","naE~ama"],"ln":[17,50,18,33,17,1,2,1,1]}]
452: [{"id":"n19","word":"أَغْنَى","wordEn":"Aghnaa"},{"id":"k5","word":"أَغْنَى","wordEn":"Agh’naa"}]	gny			>agonaY	أَغْنَى	[{"r":"gny","l":["ganiY~",">agonato",">agonaY`","m~ugonuwn","{sotagonaY`"],"ln":[24,28,15,2,4]}]
453: [{"id":"n19","word":"أَقْنَى","wordEn":"Aqnaa"}]	qny			>aqonaY	أَقْنَى	[{"r":"qny","l":[">aqonaY`"],"ln":[1]}]
454: [{"id":"n20","word":"خَسِرَ","wordEn":"Khasira"},{"id":"k20","word":"خَسِرَ","wordEn":"Khasira"}]	xsr			xasira	خَسِرَ	[{"r":"xsr","l":["xa`siriyn","xasira","xusoraAn",">axosariyn","taxosiyr","xasaAr","muxosiriyn","yuxosiru","xusor","xaAsirap"],"ln":[32,16,3,4,1,3,1,2,2,1]}]
455: [{"id":"n22","word":"خَرَجَ","wordEn":"Kharaja"}]	xrj			xaraja	خَرَجَ	[{"r":"xrj","l":[">axoraja","muxorij","xaraja","<ixoraAj","xaArij","xuruwj","{sotaxoraja","muxoraj","xaroj","xaraAj","maxoraj"],"ln":[99,3,53,6,3,5,4,5,2,1,1]}]
456: [{"id":"n22","word":"بَرَزَ","wordEn":"Baraza"}]	brz			baraza	بَرَزَ	[{"r":"brz","l":["baraza","baArizap","bur~izati","ba`rizuwn"],"ln":[5,1,2,1]}]
457: [{"id":"n22","word":"نَفَرَ","wordEn":"Nafara"}]	nfr			nafara	نَفَرَ	[{"r":"nfr","l":["nafara","nafiyr","nufuwr","nafar","m~usotanfirap"],"ln":[8,1,5,3,1]}]
458: [{"id":"b59","word":"زَهَقَ","wordEn":"Zahaqa"},{"id":"n22","word":"زَهَقَ","wordEn":"Zahaqa"}]	zhq			zahaqa	زَهَقَ	[{"r":"zhq","l":["zahaqa","zahuwq","zaAhiq"],"ln":[3,1,1]}]
459: [{"id":"n22","word":"طَلَعَ","wordEn":"Tala’aa"}]	TlE			TalaEa	طَلَعَ	[{"r":"TlE","l":["yuToliEa","T~alaEa","TaloE","TalaEat","maToliE","TuluwE","m~uT~aliEuwn","maTolaE"],"ln":[1,7,4,2,1,2,1,1]}]
460: [{"id":"n23","word":"أَخْرَجَ","wordEn":"Akhraja"}]	xrj			>axoraja	أَخْرَجَ	[{"r":"xrj","l":[">axoraja","muxorij","xaraja","<ixoraAj","xaArij","xuruwj","{sotaxoraja","muxoraj","xaroj","xaraAj","maxoraj"],"ln":[99,3,53,6,3,5,4,5,2,1,1]}]
461: [{"id":"n24","word":"طَرْف","wordEn":"Tarrff"},{"id":"k24","word":"طَرْف","wordEn":"Tarff"}]	Trf			Tarof	طَرْف	[{"r":"Trf","l":["Taraf","Tarof"],"ln":[5,6]}]
462: [{"id":"n24","word":"بَصَر","wordEn":"Basar"}]	bSr			baSar	بَصَر	[{"r":"bSr","l":["baSar",">aboSara","baSiyr","baSiyrap","muboSir","muboSirap","baSurato","musotaboSiriyn","taboSirap","yubaS~aru"],"ln":[48,29,51,7,4,3,3,1,1,1]}]
463: [{"id":"n25","word":"رَقِيب","wordEn":"Raqeeb"}]	rqb			raqiyb	رَقِيب	[{"r":"rqb","l":["raqabap","raqiyb","yaroqubu","{rotaqibo","yataraq~abu","m~urotaqibuwn"],"ln":[9,5,3,4,2,1]}]
464: [{"id":"n25","word":"حَرَس","wordEn":"Harass"}]	Hrs			Haras	حَرَس	[{"r":"Hrs","l":["Haras"],"ln":[1]}]
465: [{"id":"n25","word":"مُهَيْمِن","wordEn":"Muhaymin"}]	hmn			muhayomin	مُهَيْمِن	[{"r":"hmn","l":["muhayomin"],"ln":[2]}]
466: [{"id":"n28","word":"لَمْ","wordEn":"Lam"}]	lmH			lamo	لَمْ	[{"r":"lmH","l":["lamoH"],"ln":[2]}]
467: [{"id":"h2","word":"بَلَى","wordEn":"Balaa"},{"id":"n28","word":"بَلَى","wordEn":"Balaa"}]	-			balaY	بَلَى	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
468: [{"id":"n28","word":"لَاتَ","wordEn":"Laata"}]	lwt			laAta	لَاتَ	[{"r":"lwt","l":["laAta"],"ln":[1]}]
469: [{"id":"n30","word":"تَحْت","wordEn":"That"}]	tHt			taHot	تَحْت	[{"r":"tHt","l":["taHot"],"ln":[51]}]
470: [{"id":"n30","word":"أَسْفَل","wordEn":"Assfal"}]	sfl			>asofal	أَسْفَل	[{"r":"sfl","l":[">asofal","s~ufolaY`","saAfil"],"ln":[6,1,3]}]
471: [{"id":"n30","word":"سَافِل","wordEn":"Saafil"}]	sfl			saAfil	سَافِل	[{"r":"sfl","l":[">asofal","s~ufolaY`","saAfil"],"ln":[6,1,3]}]
472: [{"id":"dd3","wordEn":"Khasha’aa","word":"خَشَعَ","root":"x$E"},{"id":"n31","word":"خَشَعَ","wordEn":"Khasha’aa"},{"id":"E2","word":"خَشَعَ","wordEn":"Khasha’aa"}]	x$E			xa$aEa	خَشَعَ	[{"r":"x$E","l":["xaA$iE","xu$uwE","xa$aEati"],"ln":[14,1,2]}]
473: [{"id":"n32","word":"سَعِيد","wordEn":"Saeed"}]	sEd			saEiyd	سَعِيد	[{"r":"sEd","l":["saEiyd","suEidu"],"ln":[1,1]}]
474: [{"id":"n33","word":"بِرّ","wordEn":"Berr"}]	brr			bir~	بِرّ	[{"r":"brr","l":["bir~","tabar~u","bar~"],"ln":[8,2,22]}]
475: [{"id":"AA14","word":"أَحْسَنَ","wordEn":"Ahsana"},{"id":"n34","word":"أَحْسَنَ","wordEn":"Ah’sana"}]	Hsn			>aHosana	أَحْسَنَ	[{"r":"Hsn","l":["muHosin","<iHosa`n","Huson",">aHosan",">aHosana","Hasanap","Hasan","Hasuna","HusonaY`","Hasana`t","Husonayayon","muHosina`t"],"ln":[38,12,13,36,21,28,21,3,17,3,1,1]}]
476: [{"id":"AA14","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n19","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n34","word":"أَنْعَمَ","wordEn":"An’ama"}]	nEm			>anoEama	أَنْعَمَ	[{"r":"nEm","l":[">anoEama","niEomap","niEoma","n~aEam","naEiym","naEomaA^'","n~aEomap","n~aAEimap","naE~ama"],"ln":[17,50,18,33,17,1,2,1,1]}]
477: [{"id":"b66","word":"ضَرَبَ","wordEn":"Daraba"},{"id":"m1","word":"ضَرَبَ","wordEn":"Daraba"}]	Drb			Daraba	ضَرَبَ	[{"r":"Drb","l":["Daraba","Darob"],"ln":[55,3]}]
478: [{"id":"m1","word":"وَكَزَ","wordEn":"Wakaza"}]	wkz			wakaza	وَكَزَ	[{"r":"wkz","l":["wakaza"],"ln":[1]}]
479: [{"id":"m3","word":"رِزْق","wordEn":"Rizzq"}]	rzq			rizoq	رِزْق	[{"r":"rzq","l":["razaqa","rizoq","r~a`ziqiyn","r~az~aAq"],"ln":[61,55,6,1]}]
480: [{"id":"AA12","word":"خَيْر","wordEn":"Khayr"},{"id":"m3","word":"خَيْر","wordEn":"Khayr"}]	xyr			xayor	خَيْر	[{"r":"xyr","l":["xayor","xayora`t","{xotaAra","xiyarap","yataxay~aru"],"ln":[178,10,4,2,2]}]
481: [{"id":"m3","word":"مَغَانِم","wordEn":"Maghaanim"}]	gnm			magaAnim	مَغَانِم	[{"r":"gnm","l":["magaAnim","ganam","ganimo"],"ln":[4,3,2]}]
482: [{"id":"m4","word":"رَبّ","wordEn":"Rabb"}]	rbb,rbS,rbw			rab~	رَبّ	[{"r":"rbb","l":["rab~","rab~a`niy~in","rib~iy~uwn","raba`^}ib"],"ln":[975,3,1,1]},{"r":"rbS","l":["tarab~uS","tarab~aSo","m~utarab~iS"],"ln":[1,13,3]},{"r":"rbw","l":["rabowap","r~ibaw`A",">arobaY`","r~aAbiy","rab~aya","rabato","r~ib","r~aAbiyap"],"ln":[2,7,2,1,2,4,1,1]}]
483: [{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}]	Ahl,hlk			>ahol	أَهْل	[{"r":"Ahl","l":[">ahol"],"ln":[127]},{"r":"hlk","l":["t~aholukap",">aholaka","halaka","muholik","haAlik","maholik","muholakiyn","muholikiY"],"ln":[1,51,5,5,2,2,1,1]}]
484: [{"id":"m5","word":"أُمْ","wordEn":"Umm"}]	mny,mTr			>umo	أُمْ	[{"r":"mny","l":[">umoniy~at","yataman~a","yuman~iy","taman~aY`^","yumonaY`","m~aniY~"],"ln":[6,6,2,3,3,1]},{"r":"mTr","l":["m~aTar",">umoTirato","m~umoTir"],"ln":[7,7,1]}]
485: [{"id":"b102","word":"سَأَلَ","wordEn":"Sa’a’la"},{"id":"m6","word":"سَأَلَ","wordEn":"Sa’ala"}]	sAl			sa>ala	سَأَلَ	[{"r":"sAl","l":["sa>ala","saA^}il","yatasaA^'alu","maso_#uwl","su&ol","su&aAl"],"ln":[106,7,9,5,1,1]}]
486: [{"id":"m8","word":"تُرَاب","wordEn":"Turaab"}]	trb			turaAb	تُرَاب	[{"r":"trb","l":["turaAb",">atoraAb","t~araA^}ib","matorabap"],"ln":[17,3,1,1]}]
487: [{"id":"m8","word":"طِين","wordEn":"Teen"}]	-,qsT,Tyn,qnT			Tiyn	طِين	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"qsT","l":[">aqosaT","qisoT","tuqosiTu","muqosiTiyn","qa`siTuwn"],"ln":[2,15,3,3,2]},{"r":"Tyn","l":["Tiyn"],"ln":[12]},{"r":"qnT","l":["qa`niTiyn","qanaTu","qanuwT"],"ln":[1,4,1]}]
488: [{"id":"m8","word":"صَعِيد","wordEn":"Saeed"}]	SEd			SaEiyd	صَعِيد	[{"r":"SEd","l":["tuSoEidu","SaEiyd","yaS~aE~adu","yaSoEadu","SaEad","SaEuwd"],"ln":[1,4,1,1,1,1]}]
489: [{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}]	qDy			qaDaY	قَضَى	[{"r":"qDy","l":["qaDaY`^","m~aqoDiy~","qaAD","qaADiyap"],"ln":[59,2,1,1]}]
490: [{"id":"m10","word":"نَادِي","wordEn":"Naadee"}]	ndw			naAdiy	نَادِي	[{"r":"ndw","l":["nidaA^'","naAdaY`","munaAdiy","nadiy~","naAdiy","t~anaAd","munaAd","tanaAda"],"ln":[2,44,1,1,2,1,1,1]}]
491: [{"id":"m12","word":"شَغَفَ","wordEn":"Shaghafa"}]	$gf			$agafa	شَغَفَ	[{"r":"$gf","l":["$agafa"],"ln":[]}]
492: [{"id":"m13","word":"قَصْر","wordEn":"Qassrr"}]	qSr			qaSor	قَصْر	[{"r":"qSr","l":["taqoSuru","qaSor","yuqoSiru","qa`Sira`t","muqaS~iriyn","m~aqoSuwra`t"],"ln":[1,4,1,3,1,1]}]
493: [{"id":"m13","word":"صَرْح","wordEn":"Sarrh"}]	SrH			SaroH	صَرْح	[{"r":"SrH","l":["SaroH"],"ln":[4]}]
494: [{"id":"m14","word":"عَمِلَ","wordEn":"Amela"},{"id":"k21","word":"عَمِلَ","wordEn":"Amela"}]	Eml			Eamila	عَمِلَ	[{"r":"Eml","l":["Eamila","Eamal","Ea`mil","EaAmilap"],"ln":[276,71,12,1]}]
495: [{"id":"m14","word":"شِقّ","wordEn":"Shiqq"}]	$qq			$iq~	شِقّ	[{"r":"$qq","l":["ya$~aq~aqu","$iqaAq","$aA^q~u","$~uq~ap",">a$aq~","$iq~","{n$aq~a","$aqaqo","$aq~"],"ln":[3,7,7,1,1,1,5,2]}]
496: [{"id":"m17","word":"أَمَد","wordEn":"Amad"}]	mdd,Amd			>amad	أَمَد	[{"r":"mdd","l":["mad~a",">amad~a","mumid~","mud~at","midaAd","madad","mad~","m~amoduwd","m~umad~adap"],"ln":[13,10,1,1,1,1,2,2,1]},{"r":"Amd","l":[">amad"],"ln":[4]}]
497: [{"id":"m17","word":"مَهْل","wordEn":"Mahl"}]	hlk			mahol	مَهْل	[{"r":"hlk","l":["t~aholukap",">aholaka","halaka","muholik","haAlik","maholik","muholakiyn","muholikiY"],"ln":[1,51,5,5,2,2,1,1]}]
498: [{"id":"m17","word":"عُمْر","wordEn":"Omur"}]	Emr			Eumor	عُمْر	[{"r":"Emr","l":["yuEam~aru","{Eotamara","Eumorap","Eamaru","EimaArap","Eumur","{sotaEomara","Eamor","m~uEam~ar","maEomuwr"],"ln":[5,1,2,4,1,7,1,1,1,1]}]
499: [{"id":"m18","word":"أَمَدّ","wordEn":"Amadd"}]	mdd			>amad~	أَمَدّ	[{"r":"mdd","l":["mad~a",">amad~a","mumid~","mud~at","midaAd","madad","mad~","m~amoduwd","m~umad~adap"],"ln":[13,10,1,1,1,1,2,2,1]}]
500: [{"id":"m19","word":"نَاصِر","wordEn":"Naasir"}]	nSr			naASir	نَاصِر	[{"r":"nSr","l":["naSara","naSoraAniy~","naSiyr","naSor","naASir","{sotanSara","manSuwr","m~untaSir","{ntaSara","tanaASaru"],"ln":[59,15,35,22,11,2,2,4,7,1]}]
501: [{"id":"m19","word":"حَوَارِي","wordEn":"Hawareey"}]	Hwr			HawaAriy	حَوَارِي	[{"r":"Hwr","l":["HawaAriy~uwn","yuHaAwiru","Huwr","taHaAwur","yaHuwra"],"ln":[5,2,4,1,1]}]
502: [{"id":"m19","word":"شَهِيد","wordEn":"Shaheed"}]	$hd			$ahiyd	شَهِيد	[{"r":"$hd","l":["$ahiyd","$ahida","$aha`dap",">a$ohada","{sota$ohidu","$aAhid","ma$ohuwd","m~a$ohad","$aha`da`t"],"ln":[56,44,23,7,2,21,3,1]}]
503: [{"id":"m19","word":"ظَهِير","wordEn":"Zaheer"}]	Zhr			Zahiyr	ظَهِير	[{"r":"Zhr","l":["taZa`haru","Zahor","Za`hir","Zahara","Za`haru",">aZohara","Zihoriy~","Zahiyr","Z~ahiyrap","Za`hirap"],"ln":[2,15,8,10,6,8,1,6,1,2]}]
504: [{"id":"m19","word":"وَزِير","wordEn":"Wazeer"}]	wzr			waziyr	وَزِير	[{"r":"wzr","l":["wizor","yaziru","waAzirap","waziyr","wazar"],"ln":[12,7,5,2,1]}]
505: [{"id":"m19","word":"عَضُد","wordEn":"Adud"}]	EDd			EaDud	عَضُد	[{"r":"EDd","l":["EaDud"],"ln":[2]}]
506: [{"id":"m21","word":"رَجُل","wordEn":"Rajul"}]	rjl			rajul	رَجُل	[{"r":"rjl","l":["rijaAl","rajul","rijol","rajil"],"ln":[28,29,15,1]}]
507: [{"id":"m22","word":"طَعْم","wordEn":"Ta’am"}]	TEm			TaEom	طَعْم	[{"r":"TEm","l":["TaEaAm","TaEimu","<iToEa`m",">aToEama","TaAEim","{sotaToEama","TaEom"],"ln":[24,5,3,13,1,1,1]}]
508: [{"id":"m22","word":"لَذَّة","wordEn":"Lath’thah"}]	l**			la*~ap	لَذَّة	[{"r":"l**","l":["la*~ap","tala*~u"],"ln":[2,1]}]
509: [{"id":"m23","word":"زُخْرُف","wordEn":"Zakh’rafa"}]	zxrf			zuxoruf	زُخْرُف	[{"r":"zxrf","l":["zuxoruf"],"ln":[4]}]
510: []	-,sbl			sabiyl	سَبِيل	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"sbl","l":["sabiyl"],"ln":[176]}]
511: [{"id":"m24","word":"مُقْوِين","wordEn":"Muqween"}]	qwy			muqowiyn	مُقْوِين	[{"r":"qwy","l":["quw~ap","qawiY~","muqowiyn"],"ln":[30,11,1]}]
512: [{"id":"m27","word":"شَغَلَ","wordEn":"Shaghala"}]	$gl			$agala	شَغَلَ	[{"r":"$gl","l":["$ugul","$agalato"],"ln":[1]}]
513: [{"id":"b55","word":"أَفَاضَ","wordEn":"Afaad"},{"id":"m27","word":"أَفَاضَ","wordEn":"Afaada"}]	fyD			>afaADa	أَفَاضَ	[{"r":"fyD","l":[">afaADa","tafiyDu"],"ln":[7,2]}]
514: [{"id":"m28","word":"أَعْنَتَ","wordEn":"A’anata"}]	Ent			>aEonata	أَعْنَتَ	[{"r":"Ent","l":[">aEonata","Eani","Eanat"],"ln":[1,3,1]}]
515: [{"id":"m31","word":"ثَابِت","wordEn":"Thaabit"}]	vbt			vaAbit	ثَابِت	[{"r":"vbt","l":["vab~ato","tavobiyt","yuvobitu","{vobutu","vaAbit","vubuwt"],"ln":[10,2,2,1,2,1]}]
516: [{"id":"m31","word":"مَتِين","wordEn":"Mateen"}]	mtn			matiyn	مَتِين	[{"r":"mtn","l":["matiyn"],"ln":[3]}]
517: [{"id":"m31","word":"قَيِّمَة","wordEn":"Qayyimah"}]	qwm			qay~imap	قَيِّمَة	[{"r":"qwm","l":["m~usotaqiym",">aqaAma","qaAma","qawom","qiya`map","maqaAm","qay~uwm",">aqowam","qaA^}im","qaA^}imap","qaw~a`miyn","m~uqiym","qiyam","{sotaqa`mu","qay~im","<iqaAmat","<iqaAm","muqaAm","qawaAm","muqaAmap","taqowiym","qay~imap"],"ln":[37,54,33,383,70,14,3,4,17,5,3,10,1,10,5,1,2,3,1,1,1,2]}]
518: [{"id":"m31","word":"وُثْقَى","wordEn":"Wuth’qaa"}]	wvq			wuvoqaY	وُثْقَى	[{"r":"wvq","l":["m~iyva`q","wuvoqaY`","waAvaqa","m~awoviq","wavaAq","yuwviqu"],"ln":[25,2,1,3,2,1]}]
519: [{"id":"m32","word":"أَتْقَنَ","wordEn":"Atqana"}]	tqn			>atoqana	أَتْقَنَ	[{"r":"tqn","l":[">atoqana"],"ln":[1]}]
520: [{"id":"b41","word":"عَفَا","wordEn":"Afaa"},{"id":"m33","word":"عَفَا","wordEn":"Afaa"}]	Efw			EafaA	عَفَا	[{"r":"Efw","l":["EafaA","Eafow","EaAfiyn","Eafuw~"],"ln":[27,2,1,5]}]
521: [{"id":"m33","word":"غَفَرَ","wordEn":"Ghafara"}]	gfr			gafara	غَفَرَ	[{"r":"gfr","l":["gafara","gafuwr","m~agofirap","{sotagofara","guforaAn","musotagofiriyn","gaAfir","{sotigofaAr","gaf~aAr"],"ln":[65,91,28,40,1,1,2,1,5]}]
522: [{"id":"m36","word":"وُجْد","wordEn":"Wujd"}]	wjd			wujod	وُجْد	[{"r":"wjd","l":["wajada","wujod"],"ln":[106,1]}]
523: [{"id":"m36","word":"سَعَة","wordEn":"Sa’ah"},{"id":"f3","word":"سَعَة","wordEn":"Sa’ah"}]	wsE			saEap	سَعَة	[{"r":"wsE","l":["wa`siE","wusoE","muwsiE","saEap","wasiEa","wa`siEap"],"ln":[9,5,2,6,6,4]}]
524: [{"id":"m36","word":"قَدَر","wordEn":"Qadarr"}]	qdr			qadar	قَدَر	[{"r":"qdr","l":["qadiyr","qadar","qadara","qaAdir","qador","taqodiyr","qad~ara","miqodaAr","m~uqotadir","m~aqoduwr","quduwr"],"ln":[45,11,25,14,7,5,16,3,4,1,1]}]
525: [{"id":"m37","word":"فَرَضَ","wordEn":"Farada"}]	frD			faraDa	فَرَضَ	[{"r":"frD","l":["faAriD","faraDa","fariyDap","m~aforuwD"],"ln":[1,9,6,2]}]
526: [{"id":"m38","word":"ذُبَاب","wordEn":"Thubaab"}]	*bb			*ubaAb	ذُبَاب	[{"r":"*bb","l":["*ubaAb"],"ln":[2]}]
527: [{"id":"m40","word":"مَرَجَ","wordEn":"Maraja"}]	mrj			maraja	مَرَجَ	[{"r":"mrj","l":["maraja","m~ariyj","m~aArij","marojaAn"],"ln":[2,1,1,2]}]
528: [{"id":"m41","word":"أَعْرَضَ","wordEn":"A’arada"}]	ErD			>aEoraDa	أَعْرَضَ	[{"r":"ErD","l":["EaraDa","m~uEoriDuwn","EuroDap","Ear~aDo","EaroD",">aEoraDa","EaraD","<iEoraAD","EariyD","EaAriD"],"ln":[11,19,1,1,4,32,6,2,1,2]}]
529: [{"id":"m41","word":"صَدَفَ","wordEn":"Sadafa"}]	Sdf			Sadafa	صَدَفَ	[{"r":"Sdf","l":["Sadafa","S~adafayon"],"ln":[4,1]}]
530: [{"id":"m44","word":"لَطِيف","wordEn":"Lateef"}]	lTf			laTiyf	لَطِيف	[{"r":"lTf","l":["laTiyf","yatalaT~afo"],"ln":[7,1]}]
531: [{"id":"m44","word":"حَنَان","wordEn":"Hanaan"}]	Hnn			HanaAn	حَنَان	[{"r":"Hnn","l":["HanaAn"],"ln":[1]}]
532: [{"id":"m45","word":"طَبَعَ","wordEn":"Taba’aa"}]	TbE			TabaEa	طَبَعَ	[{"r":"TbE","l":["TabaEa"],"ln":[11]}]
533: [{"id":"m45","word":"خَتَمَ","wordEn":"Khatama"}]	xtm			xatama	خَتَمَ	[{"r":"xtm","l":["xatama","xaAtam","m~axotuwm","xita`m"],"ln":[5,1,1,1]}]
534: [{"id":"m46","word":"أَمْلَى","wordEn":"Amlaa"}]	mlw			>amolaY	أَمْلَى	[{"r":"mlw","l":[">amolaY`","maliy~"],"ln":[9,1]}]
535: [{"id":"m46","word":"نَظِرَة","wordEn":"Nazirah"}]	nZr			naZirap	نَظِرَة	[{"r":"nZr","l":["n~aZara","na`Ziriyn","yunZaru","naZirap","yantaZiru","muntaZiruwn","munZaruwn","naAZirap","naZorap","naZar"],"ln":[87,5,12,1,8,6,6,2,1,1]}]
536: [{"id":"m47","word":"ضَيْف","wordEn":"Dayf"}]	Dyf			Dayof	ضَيْف	[{"r":"Dyf","l":["Dayof","yuDay~ifu"],"ln":[5,1]}]
537: [{"id":"m47","word":"وَفْد","wordEn":"Wafd"}]	wfd			wafod	وَفْد	[{"r":"wfd","l":["wafod"],"ln":[1]}]
538: [{"id":"m49","word":"دُسُر","wordEn":"Dusurr"}]	dsr			dusur	دُسُر	[{"r":"dsr","l":["dusur"],"ln":[1]}]
539: [{"id":"m49","word":"أَوْتَاد","wordEn":"Awtaad"}]	wtd			>awotaAd	أَوْتَاد	[{"r":"wtd","l":[">awotaAd"],"ln":[3]}]
540: [{"id":"l1","word":"عَصَا","wordEn":"Asaa"}]	ESw,ESy			EaSaA	عَصَا	[{"r":"ESw","l":["EaSaA2","EiSiy~"],"ln":[10,2]},{"r":"ESy","l":["EaSaA","EaSiy~","EiSoyaAn","maEoSiyat"],"ln":[27,2,1,2]}]
541: [{"id":"A25","word":"أَتَى","wordEn":"Ataa"},{"id":"d34","wordEn":"Ataa","word":"أَتَى","root":"Aty"}]	Aty			>ataY	أَتَى	[{"r":"Aty","l":[">ataY","A^taY","mu&otuwn","A^tiy","<iytaA'N","ma>otiy~N"],"ln":[264,271,1,9,3,1]}]
542: [{"id":"l3","word":"أَوْلَى","wordEn":"Awlaa"}]	wly			>awolaY	أَوْلَى	[{"r":"wly","l":["tawal~aY`","waliY~","wal~aY`","muwal~iy","mawolaY`",">awolaY`","mawa`liY",">awolaya`n","wala`yat","yalu","waAl","mawa`liy"],"ln":[78,86,30,1,18,11,2,1,2,1,1,1]}]
543: [{"id":"l6","word":"رَقَبَ","wordEn":"Raqaba"}]	rqb			raqaba	رَقَبَ	[{"r":"rqb","l":["raqabap","raqiyb","yaroqubu","{rotaqibo","yataraq~abu","m~urotaqibuwn"],"ln":[9,5,3,4,2,1]}]
544: [{"id":"l7","word":"فَوْج","wordEn":"Fawj"}]	fwj			fawoj	فَوْج	[{"r":"fwj","l":["fawoj"],"ln":[5]}]
545: [{"id":"l7","word":"حِزْب","wordEn":"Hizb"}]	Hzb			Hizob	حِزْب	[{"r":"Hzb","l":["Hizob"],"ln":[20]}]
546: [{"id":"l7","word":"نَفِير","wordEn":"Nafeer"}]	nfr			nafiyr	نَفِير	[{"r":"nfr","l":["nafara","nafiyr","nufuwr","nafar","m~usotanfirap"],"ln":[8,1,5,3,1]}]
547: [{"id":"l7","word":"فِئَة","wordEn":"Fiah"}]	fAy			fi}ap	فِئَة	[{"r":"fAy","l":["fi}ap","fi}at"],"ln":[10,1]}]
548: [{"id":"l7","word":"ثُبَات","wordEn":"Thubaat"}]	vby			vubaAt	ثُبَات	[{"r":"vby","l":["vubaAt"],"ln":[1]}]
549: [{"id":"l8","word":"حَطَب","wordEn":"Hatab"}]	HTb			HaTab	حَطَب	[{"r":"HTb","l":["HaTab"],"ln":[2]}]
550: [{"id":"l9","word":"كَتَبَ","wordEn":"Kataba"}]	ktb			kataba	كَتَبَ	[{"r":"ktb","l":["kita`b","kataba","kaAtib","makotuwb","kaAtibu","{kotataba","kita`biY"],"ln":[260,49,6,1,1,1,1]}]
551: [{"id":"l11","word":"كَاتِب","wordEn":"Kaatib"}]	ktb			kaAtib	كَاتِب	[{"r":"ktb","l":["kita`b","kataba","kaAtib","makotuwb","kaAtibu","{kotataba","kita`biY"],"ln":[260,49,6,1,1,1,1]}]
552: [{"id":"l11","word":"سَفَرَة","wordEn":"Safarah"}]	sfr			safarap	سَفَرَة	[{"r":"sfr","l":["safar",">asofaAr",">asofara","safarap","m~usofirap"],"ln":[7,2,1,1,1]}]
553: [{"id":"l12","word":"تَتْر","wordEn":"Tatrr"}]	wtr			tator	تَتْر	[{"r":"wtr","l":["tatoraA","yatira","wator"],"ln":[1,1,1]}]
554: []	-			EalaY	عَلَى	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
555: [{"id":"b24","word":"حُسُوم","wordEn":"Hosoom"},{"id":"n10","word":"حُسُوم","wordEn":"Husoom"},{"id":"l12","word":"حُسُوم","wordEn":"Hussom"}]	Hsm			Husuwm	حُسُوم	[{"r":"Hsm","l":["Husuwm"],"ln":[1]}]
556: [{"id":"l12","word":"رَدِف","wordEn":"Radif"}]	rdf			radif	رَدِف	[{"r":"rdf","l":["murodifiyn","radifa","r~aAdifap"],"ln":[1,1,1]}]
557: [{"id":"l12","word":"دَأْب","wordEn":"Da’ab"}]	dAb			da>ob	دَأْب	[{"r":"dAb","l":["da>ob","da>ab","daA^}ibayon"],"ln":[4,1,1]}]
558: [{"id":"l12","word":"مُتَتَابِع","wordEn":"Mutataabea"}]	tbE			mutataAbiE	مُتَتَابِع	[{"r":"tbE","l":["tabiEa","{t~abaEa","taAbiE","{t~ibaAE",">atobaEa","mutataAbiEayon","tabaE","tabiyE","m~ut~abaEuwn"],"ln":[9,136,3,2,15,2,2,1,2]}]
559: [{"id":"l13","word":"رَجَعَ","wordEn":"Raja’aa"}]	rjE			rajaEa	رَجَعَ	[{"r":"rjE","l":["rajaEa","ra`jiEuwn","yataraAjaEa","marojiE","rajoE","r~ujoEaY`^"],"ln":[79,4,1,16,3,1]}]
560: [{"id":"l13","word":"تَابَ","wordEn":"Taaba"}]	ryb,twb			taAba	تَابَ	[{"r":"ryb","l":["rayob","{rotaAba","riybap","muriyb","m~urotaAb"],"ln":[18,9,1,7,1]},{"r":"twb","l":["taAba","taw~aAb","tawobap","t~a`^}ibuwn","mataAb","t~awob","ta`^}iba`t"],"ln":[63,12,7,1,2,1,1]}]
561: [{"id":"l13","word":"أَنَابَ","wordEn":"Anaaba"}]	nwb			>anaAba	أَنَابَ	[{"r":"nwb","l":["m~uniyb",">anaAba"],"ln":[7,11]}]
562: [{"id":"l15","word":"عَبْد","wordEn":"Abd"}]	Ebd			Eabod	عَبْد	[{"r":"Ebd","l":["Eabada","Eabod","EaAbid","EibaAdat","Eab~ad","Ea`bida`t"],"ln":[122,131,11,9,1,1]}]
563: [{"id":"l15","word":"أَمَة","wordEn":"Amah"}]	Amw			>amap	أَمَة	[{"r":"Amw","l":[">amap"],"ln":[2]}]
564: [{"id":"l15","word":"رَقَبَة","wordEn":"Raqabah"}]	rqb			raqabap	رَقَبَة	[{"r":"rqb","l":["raqabap","raqiyb","yaroqubu","{rotaqibo","yataraq~abu","m~urotaqibuwn"],"ln":[9,5,3,4,2,1]}]
565: [{"id":"l15","word":"مُلْك","wordEn":"Mulk"}]	mlk			mulok	مُلْك	[{"r":"mlk","l":["ma`lik","malak","mulok","malik","malakato","malakuwt","m~amoluwk","malok","ma`lik2","maliyk"],"ln":[3,88,48,15,44,4,1,1,1,1]}]
566: [{"id":"h1","word":"يَمِين","wordEn":"Yameen"},{"id":"l15","word":"يَمِين","wordEn":"Yameen"},{"id":"q11","word":"يَمِين","wordEn":"Yameen"}]	ymn			yamiyn	يَمِين	[{"r":"ymn","l":["yamiyn",">ayoman","mayomanap"],"ln":[65,3,3]}]
567: [{"id":"b99","word":"أَخَذَ","wordEn":"Akhatha"},{"id":"l16","word":"أَخَذَ","wordEn":"Akhatha"}]	Ax*			>axa*a	أَخَذَ	[{"r":"Ax*","l":[">axa*a","{t~axa*a","{t~ixaA*","yu&aAxi*u","A^xi*","mut~axi*",">axo*"],"ln":[127,124,1,9,3,3,6]}]
568: [{"id":"k1","word":"عَقَرَ","wordEn":"Aqara"}]	Eqr			Eaqara	عَقَرَ	[{"r":"Eqr","l":["EaAqir","Eaqara"],"ln":[3,5]}]
569: [{"id":"k3","word":"رَقّ","wordEn":"Raqq"}]	rqb,rqq			raq~	رَقّ	[{"r":"rqb","l":["raqabap","raqiyb","yaroqubu","{rotaqibo","yataraq~abu","m~urotaqibuwn"],"ln":[9,5,3,4,2,1]},{"r":"rqq","l":["raq~"],"ln":[1]}]
570: [{"id":"k3","word":"قِرْطَاس","wordEn":"Qirtaass"}]	qrTs			qiroTaAs	قِرْطَاس	[{"r":"qrTs","l":["qiroTaAs"],"ln":[2]}]
571: [{"id":"k4","word":"كَفَى","wordEn":"Kafaa"}]	kfy			kafaY	كَفَى	[{"r":"kfy","l":["kafaY`","kaAf"],"ln":[32,1]}]
572: [{"id":"k4","word":"حَسْب","wordEn":"Hassb"}]	Hsb			Hasob	حَسْب	[{"r":"Hsb","l":["HisaAb","Hasob","Hasiba","HaAsabo","Hasiyb","Ha`sibiyn","HusobaAn","yaHotasibu"],"ln":[39,11,44,3,4,2,3,3]}]
573: [{"id":"b30","word":"جَزَى","wordEn":"Jazaa"},{"id":"k5","word":"جَزَى","wordEn":"Jazaa"}]	jzy			jazaY	جَزَى	[{"r":"jzy","l":["jazaY`","jazaA^'","jizoyap","jaAz","nuja`ziY^"],"ln":[73,42,1,1,1]}]
574: [{"id":"n19","word":"أَغْنَى","wordEn":"Aghnaa"},{"id":"k5","word":"أَغْنَى","wordEn":"Agh’naa"}]	gny			>agonaY	أَغْنَى	[{"r":"gny","l":["ganiY~",">agonato",">agonaY`","m~ugonuwn","{sotagonaY`"],"ln":[24,28,15,2,4]}]
575: [{"id":"k6","word":"أَمْر","wordEn":"Amr"}]	Amr			>amor	أَمْر	[{"r":"Amr","l":[">amara",">amor","'aAmiruwn",">am~aArap","<imor","ya>otamiru"],"ln":[77,166,1,1,1,2]}]
576: [{"id":"k6","word":"شَأْن","wordEn":"Sha’an"}]	$An			$a>on	شَأْن	[{"r":"$An","l":["$a>on"],"ln":[]}]
577: [{"id":"k7","word":"أَفْلَحَ","wordEn":"Aflaha"}]	flH			>afolaHa	أَفْلَحَ	[{"r":"flH","l":["mufoliHuwn",">afolaHa"],"ln":[13,27]}]
578: [{"id":"n11","word":"فَازَ","wordEn":"Faaza"},{"id":"k7","word":"فَازَ","wordEn":"Faaza"}]	fwz			faAza	فَازَ	[{"r":"fwz","l":["faAza","mafaAzap","fawoz","faA^}izuwn","mafaAz"],"ln":[3,2,19,4,1]}]
579: [{"id":"k8","word":"أُذُن","wordEn":"Othun"}]	A*n			>u*un	أُذُن	[{"r":"A*n","l":[">u*unN","<i*on",">a*ina",">a*~ana","mu&a*~in","ta>a*~ana",">a*a`n","{sota_#o*ana","'aA*an"],"ln":[18,39,23,3,2,2,1,12,2]}]
580: [{"id":"k8","word":"سَمْع","wordEn":"Sam’e"}]	smE			samoE	سَمْع	[{"r":"smE","l":["samoE","samiEa","samiyE","musomaE","sam~a`Euwn","{sotamaEa",">asomaEa","musotamiE","musomiE","yas~am~aEu"],"ln":[22,78,47,1,4,16,13,2,1,1]}]
581: [{"id":"k9","word":"زَلْزَلَ","wordEn":"Zal’zala"}]	zlzl			zalozala	زَلْزَلَ	[{"r":"zlzl","l":["zulozilu","zalozalap","zilozaAl"],"ln":[3,1,2]}]
582: [{"id":"k9","word":"مَارَ","wordEn":"Maara"}]	Emr,mry			maAra	مَارَ	[{"r":"Emr","l":["yuEam~aru","{Eotamara","Eumorap","Eamaru","EimaArap","Eumur","{sotaEomara","Eamor","m~uEam~ar","maEomuwr"],"ln":[5,1,2,4,1,7,1,1,1,1]},{"r":"mry","l":["mumotariyn","yamotaru","miroyap","tumaAri","miraA^'","tamaAra"],"ln":[4,5,5,1,1,4]}]
583: [{"id":"AA37","word":"مَتَى","wordEn":"Mataa"},{"id":"k10","word":"مَتَى","wordEn":"Mataa"}]	-			mataY	مَتَى	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
584: [{"id":"k11","word":"أَسْفَار","wordEn":"Assfaar"}]	sfr			>asofaAr	أَسْفَار	[{"r":"sfr","l":["safar",">asofaAr",">asofara","safarap","m~usofirap"],"ln":[7,2,1,1,1]}]
585: [{"id":"k11","word":"زُبُر","wordEn":"Zubur"}]	zbr			zubur	زُبُر	[{"r":"zbr","l":["zubur","zabuwr","zubar"],"ln":[7,3,1]}]
586: [{"id":"AA26","word":"صُحُف","wordEn":"Suhuff"},{"id":"k11","word":"صُحُف","wordEn":"Suhuff"}]	SHf			SuHuf	صُحُف	[{"r":"SHf","l":["SuHuf","SiHaAf"],"ln":[8,1]}]
587: [{"id":"k13","word":"كَأَيّ","wordEn":"Ka’ayy"}]	-			ka>ay~	كَأَيّ	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
588: [{"id":"k15","word":"أَمَرّ","wordEn":"Amarr"}]	mrr			>amar~	أَمَرّ	[{"r":"mrr","l":["mar~ap","mar~a","mar~a`t","mar~","mir~ap","m~usotamir~",">amar~"],"ln":[19,10,1,1,1,2,1]}]
589: [{"id":"k15","word":"خَمْط","wordEn":"Khamt"}]	xmT			xamoT	خَمْط	[{"r":"xmT","l":["xamoT"],"ln":[1]}]
590: [{"id":"k17","word":"جَارِيَة","wordEn":"Jaariyah"}]	jry			jaAriyap	جَارِيَة	[{"r":"jry","l":["jarayo","majorY`","jawaAr","ja`riya`t","jaAriyap"],"ln":[57,1,3,1,2]}]
591: [{"id":"k17","word":"سَفِينَة","wordEn":"Safeenah"}]	sfn			safiynap	سَفِينَة	[{"r":"sfn","l":["safiynap"],"ln":[4]}]
592: [{"id":"k17","word":"فُلْك","wordEn":"Fulk"}]	flk			fulok	فُلْك	[{"r":"flk","l":["fulok","falak"],"ln":[23,2]}]
593: [{"id":"k18","word":"كَعْبَة","wordEn":"Ka’abah"}]	kEb			kaEobap	كَعْبَة	[{"r":"kEb","l":["kaEobayon","kaEobap","kawaAEib"],"ln":[1,2,1]}]
594: [{"id":"k19","word":"أَمْس","wordEn":"Amss"}]	-,msk			>amos	أَمْس	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"msk","l":["<imosaAk",">amosaka","{sotamosaka","yumas~iku","mumosik","mumosika`t","musotamosikuwn","misok"],"ln":[1,18,3,1,1,1,1,1]}]
595: [{"id":"b71","word":"ظَلَمَ","wordEn":"Zalama"},{"id":"k20","word":"ظَلَمَ","wordEn":"Zalama"}]	Zlm			Zalama	ظَلَمَ	[{"r":"Zlm","l":["Zuluma`t",">aZolama","ZaAlim","Zalama",">aZolam","Zulom","Zal~a`m","ZaAlimiY^","muZolim","ZaAlimap","Zaluwm","maZoluwm"],"ln":[23,1,129,110,16,20,5,2,2,4,2,1]}]
596: [{"id":"n20","word":"خَسِرَ","wordEn":"Khasira"},{"id":"k20","word":"خَسِرَ","wordEn":"Khasira"}]	xsr			xasira	خَسِرَ	[{"r":"xsr","l":["xa`siriyn","xasira","xusoraAn",">axosariyn","taxosiyr","xasaAr","muxosiriyn","yuxosiru","xusor","xaAsirap"],"ln":[32,16,3,4,1,3,1,2,2,1]}]
597: [{"id":"m14","word":"عَمِلَ","wordEn":"Amela"},{"id":"k21","word":"عَمِلَ","wordEn":"Amela"}]	Eml			Eamila	عَمِلَ	[{"r":"Eml","l":["Eamila","Eamal","Ea`mil","EaAmilap"],"ln":[276,71,12,1]}]
598: [{"id":"k22","word":"غُرْفَة","wordEn":"Ghur’fah"}]	grf			gurofap	غُرْفَة	[{"r":"grf","l":["{gotarafa","gurofap","gurufa`t"],"ln":[1,5,1]}]
599: [{"id":"k23","word":"ضَعِيف","wordEn":"Daeef"}]	DEf			DaEiyf	ضَعِيف	[{"r":"DEf","l":["yuDa`Eifu","DiEof","DaEiyf","m~uDa`Eafap","DaEufa","DiEa`f","m~usotaDoEafuwn","{sotaDoEafu","DaEof",">aDoEaf","muDoEifuwn"],"ln":[9,11,8,1,2,1,5,8,4,2,1]}]
600: [{"id":"k23","word":"وَاهِيَة","wordEn":"Waahiyah"}]	why			waAhiyap	وَاهِيَة	[{"r":"why","l":["waAhiyap"],"ln":[1]}]
601: [{"id":"n24","word":"طَرْف","wordEn":"Tarrff"},{"id":"k24","word":"طَرْف","wordEn":"Tarff"}]	Trf			Tarof	طَرْف	[{"r":"Trf","l":["Taraf","Tarof"],"ln":[5,6]}]
602: [{"id":"k24","word":"حَدّ","wordEn":"Hadd"}]	Hdv			Had~	حَدّ	[{"r":"Hdv","l":["tuHad~ivu","Hadiyv","yuHodivu","muHodav"],"ln":[3,28,3,2]}]
603: [{"id":"k24","word":"حَرْف","wordEn":"Harff"}]	Hrf			Harof	حَرْف	[{"r":"Hrf","l":["yuHar~ifu","mutaHar~if","Harof"],"ln":[4,1,1]}]
604: [{"id":"k24","word":"أُفُق","wordEn":"Ofuqq"}]	Afq			>ufuq	أُفُق	[{"r":"Afq","l":[">ufuq"],"ln":[3]}]
605: [{"id":"k24","word":"أَقْطَار","wordEn":"Aq’taar"}]	qTr			>aqoTaAr	أَقْطَار	[{"r":"qTr","l":["qaTiraAn","qiTor",">aqoTaAr"],"ln":[1,2,2]}]
606: [{"id":"k24","word":"شَفَا","wordEn":"Shafaa"}]	$fw			$afaA	شَفَا	[{"r":"$fw","l":["$afaA"],"ln":[]}]
607: [{"id":"k24","word":"مَعْزِل","wordEn":"Ma’azil"}]	Ezl			maEozil	مَعْزِل	[{"r":"Ezl","l":["{Eotazala","maEozil","maEozuwluwn","Eazalo"],"ln":[7,1,1,1]}]
608: [{"id":"k24","word":"عُدْوَة","wordEn":"Odwah"}]	Edw			Eudowap	عُدْوَة	[{"r":"Edw","l":["Eaduw~","{EotadaY`","Eudowa`n","EaAd","muEotadiyn","yataEad~a","yaEodu","Eada`wap","Eadow","Eudowap","muEotad","EaAdayo","Ea`diya`t"],"ln":[50,15,8,6,6,3,3,6,2,2,3,1,1]}]
609: [{"id":"k24","word":"صَدَف","wordEn":"Sadaff"}]	Sdf			Sadaf	صَدَف	[{"r":"Sdf","l":["Sadafa","S~adafayon"],"ln":[4,1]}]
610: [{"id":"k25","word":"بِئْر","wordEn":"Be’er"}]	bAr			bi}or	بِئْر	[{"r":"bAr","l":["bi}or"],"ln":[1]}]
611: [{"id":"k25","word":"جُبّ","wordEn":"Jubb"}]	jbb			jub~	جُبّ	[{"r":"jbb","l":["jub~"],"ln":[2]}]
612: [{"id":"k26","word":"جَلْدَة","wordEn":"Jal’dah"}]	jld			jalodap	جَلْدَة	[{"r":"jld","l":["juluwd","{jolidu","jalodap"],"ln":[9,2,2]}]
613: [{"id":"k28","word":"أَيّ","wordEn":"Ayy"}]	-,Ayd			>ay~	أَيّ	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"Ayd","l":[">ay~ada",">ayoyd"],"ln":[9,2]}]
614: [{"id":"k29","word":"أَحَد","wordEn":"Ahad"}]	AHd			>aHad	أَحَد	[{"r":"AHd","l":[">aHad","<iHodaY"],"ln":[74,11]}]
615: [{"id":"k30","word":"أَنْ","wordEn":"Ann"}]	nEm			>ano	أَنْ	[{"r":"nEm","l":[">anoEama","niEomap","niEoma","n~aEam","naEiym","naEomaA^'","n~aEomap","n~aAEimap","naE~ama"],"ln":[17,50,18,33,17,1,2,1,1]}]
616: [{"id":"k34","word":"سَلَخَ","wordEn":"Salakha"},{"id":"k42","word":"سَلَخَ","wordEn":"Salakha"}]	slx			salaxa	سَلَخَ	[{"r":"slx","l":["{nsalaxa","nasolaxu"],"ln":[2,1]}]
617: [{"id":"k35","word":"أَكَلَ","wordEn":"Akala"}]	Akl			>akala	أَكَلَ	[{"r":"Akl","l":[">akala",">ukul",">akol",">ak~a`luwn","'aAkiluwn","m~a>okuwl"],"ln":[93,7,4,1,3,1]}]
618: [{"id":"k36","word":"أَطْعَمَ","wordEn":"At’ama"}]	TEm			>aToEama	أَطْعَمَ	[{"r":"TEm","l":["TaEaAm","TaEimu","<iToEa`m",">aToEama","TaAEim","{sotaToEama","TaEom"],"ln":[24,5,3,13,1,1,1]}]
619: [{"id":"k36","word":"رَزَقَ","wordEn":"Razaqa"}]	rzq			razaqa	رَزَقَ	[{"r":"rzq","l":["razaqa","rizoq","r~a`ziqiyn","r~az~aAq"],"ln":[61,55,6,1]}]
620: [{"id":"t3","wordEn":"Ratb","word":"رَطْب"},{"id":"k37","word":"رَطْب","wordEn":"Ratbb"}]	rTb			raTob	رَطْب	[{"r":"rTb","l":["raTob","ruTab"],"ln":[1,1]}]
621: [{"id":"b120","word":"بَسَطَ","wordEn":"Basata"},{"id":"k40","word":"بَسَطَ","wordEn":"Basata"}]	bsT			basaTa	بَسَطَ	[{"r":"bsT","l":["basaTa","baSTap","ba`siT","mabosuwTataAn","basoT","bisaAT"],"ln":[16,2,4,1,1,1]}]
622: [{"id":"k40","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f2","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f14","word":"فَتَحَ","wordEn":"Fataha"}]	ftH			fataHa	فَتَحَ	[{"r":"ftH","l":["fataHa","{sotafotaHu","fatoH","mafaAtiH","tufat~aHu","fa`tiHiyn","fat~aAH","m~ufat~aHap"],"ln":[16,3,12,3,1,1,1,1]}]
623: [{"id":"k40","word":"شَرَحَ","wordEn":"Sharaha"}]	$rH			$araHa	شَرَحَ	[{"r":"$rH","l":["$araHa"],"ln":[]}]
624: [{"id":"k40","word":"كَشَفَ","wordEn":"Kashafa"}]	k$f			ka$afa	كَشَفَ	[{"r":"k$f","l":["kaA$if","ka$afa","ka$of","ka`$ifa`t","kaA$ifap"],"ln":[3,14,1,1,1]}]
625: [{"id":"k41","word":"حَرْث","wordEn":"Harrth"}]	Hrv			Harov	حَرْث	[{"r":"Hrv","l":["Harov","taHoruvu"],"ln":[13,1]}]
626: [{"id":"k41","word":"زَرْع","wordEn":"Zarr’e"}]	zrE			zaroE	زَرْع	[{"r":"zrE","l":["zaroE","tazoraEu","z~ur~aAE","z~a`riEuwn"],"ln":[10,2,1,1]}]
627: [{"id":"k42","word":"مَدَّ","wordEn":"Madda"}]	mdd			mad~a	مَدَّ	[{"r":"mdd","l":["mad~a",">amad~a","mumid~","mud~at","midaAd","madad","mad~","m~amoduwd","m~umad~adap"],"ln":[13,10,1,1,1,1,2,2,1]}]
628: [{"id":"k34","word":"سَلَخَ","wordEn":"Salakha"},{"id":"k42","word":"سَلَخَ","wordEn":"Salakha"}]	slx			salaxa	سَلَخَ	[{"r":"slx","l":["{nsalaxa","nasolaxu"],"ln":[2,1]}]
629: [{"id":"k42","word":"نَزَعَ","wordEn":"Naza’aa"}]	nzE			nazaEa	نَزَعَ	[{"r":"nzE","l":["nazaEa","tana`zaEu","yuna`ziEu","naz~aAEap","n~a`ziEa`t"],"ln":[10,7,1,1,1]}]
630: [{"id":"k45","word":"كَيْف","wordEn":"Kayf"}]	kyf			kayof	كَيْف	[{"r":"kyf","l":["kayof"],"ln":[83]}]
631: [{"id":"k46","word":"لِمَ","wordEn":"Lima"}]	Elm,Zlm,klm,slm			lima	لِمَ	[{"r":"Elm","l":["Ea`lamiyn","Ealima","Ealiym","Eal~ama","Eilom","yataEal~amu",">aEolam","m~aEoluwma`t","Eal~a`m","Ea`lim","m~aEoluwm","Eala`ma`t",">aEola`m","muEal~am"],"ln":[73,382,163,41,105,2,49,2,4,18,11,1,2,1]},{"r":"Zlm","l":["Zuluma`t",">aZolama","ZaAlim","Zalama",">aZolam","Zulom","Zal~a`m","ZaAlimiY^","muZolim","ZaAlimap","Zaluwm","maZoluwm"],"ln":[23,1,129,110,16,20,5,2,2,4,2,1]},{"r":"klm","l":["kalima`t","kala`m","kal~ama","kalimap","kalim","takoliym","yatakal~amu"],"ln":[14,4,20,28,4,1,4]},{"r":"slm","l":["m~usal~amap",">asolama","musolim","m~usolimap","s~ilom","sal~ama","<isola`m","tasoliym","salam","sala`m","sul~am","s~alom","saliym","musolima`t","musotasolimuwn","sa`limuwn"],"ln":[3,22,39,1,1,6,8,3,5,42,2,2,2,2,1,1]}]
632: [{"id":"k46","word":"لَوْلَا","wordEn":"Lawlaa"}]	-			lawolaA	لَوْلَا	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
633: [{"id":"k47","word":"أَرْسَى","wordEn":"Arr’saa"}]	rsw			>arosaY	أَرْسَى	[{"r":"rsw","l":["murosaY`","rawa`siY",">arosaY`"],"ln":[3,10,1]}]
634: [{"id":"k49","word":"عُنُق","wordEn":"Onuq"}]	Enq			Eunuq	عُنُق	[{"r":"Enq","l":["Eunuq"],"ln":[9]}]
635: [{"id":"k49","word":"جِيد","wordEn":"Jeed"}]	mjd,jyd			jiyd	جِيد	[{"r":"mjd","l":["m~ajiyd"],"ln":[4]},{"r":"jyd","l":["jiyd"],"ln":[1]}]
636: [{"id":"k49","word":"وَتِين","wordEn":"Wateen"}]	wtn			watiyn	وَتِين	[{"r":"wtn","l":["watiyn"],"ln":[1]}]
637: [{"id":"k51","word":"حَمّ","wordEn":"Hamm"}]	-,Hml			Ham~	حَمّ	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"r":"Hml","l":["Hamala","Hum~ila","{Hotamala","Hamuwlap","Hamol","Himol","Ha`miliyn","Ha`mila`t",">aHomaAl","Ham~aAlap"],"ln":[41,5,3,1,7,3,1,1,1,1]}]
638: [{"id":"d22","wordEn":"Saqarr","word":"سَقَر","root":"sqr"},{"id":"k51","word":"سَقَر","wordEn":"Saqar"}]	-			saqar	سَقَر	[{"r":"-","l":["<iy~aA","{l~a*iY","EalaY`","laA","-","*a`lik","fiY","min","maA","<ilaY`",">uwla`^}ik","<in~",">am","lam","man","<il~aA","<i*aA",">alaA^","la`kin","maE","lam~aA",">aw","law",">ay~uhaA","laEal~","<in","lan",">an~","ha`*aA",">an",">am~aA","maA*aA","vum~","<i*","A^dam","<iboliys","Ean","<im~aA","<isoraA}iyl","maE2","firoEawon","muwsaY`","Hat~aY`","qad","lawolaA^","_#a`n","wayol","balaY`","*uw","EiysaY","maroyam","bal","jiboriyl","miykaY`l","ka>an~","sulayoma`n","la`kin~","baAbil","ha`ruwt","ma`ruwt","yahuwdiy~",">ayon","vam~","<iboraAhiym","<isomaAEiyl","yaEoquwb","<isoHaAq","<i*FA","S~afaA","marowap","ramaDaAn","Earafa`t","jahan~am","hal","kam","l~am~aA","mataY`","*aA","TaAluwt","t~aAbuwt","ha`ruwn","jaAluwt","daAwud","t~aworaY`p","<injiyl","nuwH","Eimora`n","zakariy~aA","hunaAlik","yaHoyaY`","laday",">aY~","masiyH","bak~ap",">uwlaA^'","bador","muHam~ad","<iyn","ka>ay~in","kaY","hunaA","yawoma}i*","sawof","layot","<i*aA2",">ay~uwb","yuwnus","A^zar","yuwsuf","<iloyaAs","{loyasaEa","luwT","tilokum","naEam","vamuwd","madoyan","$uEayob","mahomaA",">ay~aAn","Hunayon","Euzayor","Eadon",">amos","<iY","<il~am","t~an~uwr","juwdiY~","ladaY","l~aEal~",">ay~atuhaA","r~ub",">ayokap","sundus","<isotaboraq","ya>ojuwj","ma>ojuwj","firodawos","<idoriys","kal~aA","ha`*a`n","sayonaA^'","hayohaAt","barozax","saba<","ha`ka*aA","ha`ma`n","ha`tayon","*a`nik","qa`ruwn","wayoka>an~","r~uwm","luqoma`n","{l~a`^_#iY","yavorib","zayod","yaqoTiyn","tub~aE","mak~ap","{ll~a`t","{loEuz~aY`","manaw`p","saqar","yaAquwt",">abaAriyq",">aHomad","haA^&um","laZaY`","yaguwv","yaEuwq","zanjabiyl","salosabiyl","namaAriq","zaraAbiY~","<iram","siyniyn","qurayo$"],"ln":[24,1464,1445,1691,3309,520,1701,3226,2177,742,204,1682,137,353,824,663,409,39,73,159,156,280,200,153,123,697,104,362,318,625,55,26,338,239,25,11,465,23,43,5,74,136,142,406,75,8,40,22,93,25,34,127,3,1,29,17,57,1,1,1,9,19,4,69,12,16,17,31,1,1,1,1,77,93,21,3,9,23,2,2,20,3,16,18,12,43,3,7,9,5,20,60,11,1,4,1,4,1,7,10,4,70,42,14,14,4,4,1,27,3,2,27,2,4,26,10,11,1,6,1,1,11,4,1,1,2,1,2,6,2,1,4,3,4,2,2,2,2,33,2,1,2,3,2,1,6,1,1,4,2,1,2,4,1,1,1,2,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]
639: [{"id":"h16","word":"سَمُوم","wordEn":"Samoom"},{"id":"k51","word":"سَمُوم","wordEn":"Samoom"}]	smm			samuwm	سَمُوم	[{"r":"smm","l":["sam~","samuwm"],"ln":[1,3]}]
640: [{"id":"h17","word":"وَقَعَ","wordEn":"Waqa’aa"},{"id":"k53","word":"وَقَعَ","wordEn":"Waqa’aa"}]	wqE			waqaEa	وَقَعَ	[{"r":"wqE","l":["waqaEa","yuwqiEa","waAqiE","m~uwaAqiEuw","waAqiEap","waqoEat","mawa`qiE"],"ln":[12,1,6,1,2,1,1]}]
641: [{"id":"k53","word":"هَارَ","wordEn":"Haara"}]	hwr			haAra	هَارَ	[{"r":"hwr","l":["haAr","{nohaAra"],"ln":[1,1]}]
642: [{"id":"k53","word":"هَوَى","wordEn":"Hawaa"}]	hwy			hawaY	هَوَى	[{"r":"hwy","l":["hawaY`",">ahowaA^'","hawaA^'","{sotahowato","haAwiyap"],"ln":[8,17,11,1,1]}]
643: [{"id":"k53","word":"وَجَبَ","wordEn":"Wajaba"}]	wjb			wajaba	وَجَبَ	[{"r":"wjb","l":["wajabato"],"ln":[1]}]
644: [{"id":"k55","word":"حُفْرَة","wordEn":"Hufrah"}]	Hfr			Huforap	حُفْرَة	[{"r":"Hfr","l":["Huforap","HaAfirap"],"ln":[1,1]}]
645: [{"id":"k55","word":"أُخْدُود","wordEn":"Okh’dood"}]	xdd			>uxoduwd	أُخْدُود	[{"r":"xdd","l":["xad~",">uxoduwd"],"ln":[1,1]}]
646: [{"id":"k56","word":"سَبَقَ","wordEn":"Sabaqa"}]	sbq			sabaqa	سَبَقَ	[{"r":"sbq","l":["{sotabaqa","sabaqa","saAbiq","masobuwqiyn","saAbiqu","s~a`biqa`t","saboq"],"ln":[5,20,7,2,1,1,1]}]
647: [{"id":"k56","word":"خَلَا","wordEn":"Khalaa"}]	xlw			xalaA	خَلَا	[{"r":"xlw","l":["xalaA","xal~u","xaAliyap","taxal~ato"],"ln":[25,1,1,1]}]
648: [{"id":"k56","word":"سَلَفَ","wordEn":"Salafa"}]	slf			salafa	سَلَفَ	[{"r":"slf","l":["salafa",">asolafato","salaf"],"ln":[5,2,1]}]
649: [{"id":"k56","word":"مَضَى","wordEn":"Madaa"}]	mDy			maDaY	مَضَى	[{"r":"mDy","l":["maDaY`","muDiy~"],"ln":[4,1]}]
650: [{"id":"k57","word":"حُلْقُوم","wordEn":"Hul’qoom"}]	Hlq			Huloquwm	حُلْقُوم	[{"r":"Hlq","l":["taHoliqu","muHal~iqiyn","Huloquwm"],"ln":[1,1,1]}]
651: [{"id":"k57","word":"حَنَاجِر","wordEn":"Hanaajir"}]	Hnjr			HanaAjir	حَنَاجِر	[{"r":"Hnjr","l":["HanaAjir"],"ln":[2]}]
652: [{"id":"k58","word":"فَاتَ","wordEn":"Faata"}]	fwt			faAta	فَاتَ	[{"r":"fwt","l":["faAta","fawot","tafa`wut"],"ln":[3,1,1]}]
653: [{"id":"k59","word":"زَعَمَ","wordEn":"Za’ama"}]	zEm			zaEama	زَعَمَ	[{"r":"zEm","l":["zaEama","zaEom","zaEiym"],"ln":[13,2,2]}]
654: [{"id":"k59","word":"حَسِبَ","wordEn":"Hasiba"},{"id":"k63","word":"حَسِبَ","wordEn":"Hasiba"}]	Hsb			Hasiba	حَسِبَ	[{"r":"Hsb","l":["HisaAb","Hasob","Hasiba","HaAsabo","Hasiyb","Ha`sibiyn","HusobaAn","yaHotasibu"],"ln":[39,11,44,3,4,2,3,3]}]
655: [{"id":"k60","word":"إِثْم","wordEn":"Ethm"}]	Avm			<ivom	إِثْم	[{"r":"Avm","l":["<ivom",">aviym","A^vim",">avaAm","ta>oviym"],"ln":[35,7,3,1,2]}]
656: [{"id":"k60","word":"جُنَاح","wordEn":"Junaah"}]	jnH			junaAH	جُنَاح	[{"r":"jnH","l":["junaAH","janaAH","janaHu"],"ln":[25,7,2]}]
657: [{"id":"k61","word":"مُجْرِم","wordEn":"Mujrim"}]	jrm			mujorim	مُجْرِم	[{"r":"jrm","l":["yajorima","mujorim",">ajoramu","jaram","<ijoraAm"],"ln":[3,52,5,5,1]}]
658: [{"id":"k61","word":"فَاسِق","wordEn":"Faasiq"}]	fsq			faAsiq	فَاسِق	[{"r":"fsq","l":["faAsiq","fasaqa","fusuwq","fisoq"],"ln":[37,10,4,3]}]
659: [{"id":"k61","word":"فَاجِر","wordEn":"Faajir"}]	fjr			faAjir	فَاجِر	[{"r":"fjr","l":["{nfajarato","yatafaj~aru","fajor","yafojura","fuj~irato","tafojiyr","fuj~aAr","faAjir","fujuwr"],"ln":[1,1,6,2,6,2,4,1,1]}]
660: [{"id":"k62","word":"تَفَث","wordEn":"Tafath"}]	tfv			tafav	تَفَث	[{"r":"tfv","l":["tafav"],"ln":[1]}]
661: [{"id":"n2","word":"رِجْس","wordEn":"Rijss"},{"id":"k62","word":"رِجْس","wordEn":"Rijss"}]	rjs			rijos	رِجْس	[{"r":"rjs","l":["rijos"],"ln":[10]}]
662: [{"id":"k59","word":"حَسِبَ","wordEn":"Hasiba"},{"id":"k63","word":"حَسِبَ","wordEn":"Hasiba"}]	Hsb			Hasiba	حَسِبَ	[{"r":"Hsb","l":["HisaAb","Hasob","Hasiba","HaAsabo","Hasiyb","Ha`sibiyn","HusobaAn","yaHotasibu"],"ln":[39,11,44,3,4,2,3,3]}]
663: [{"id":"k63","word":"أَحْصَى","wordEn":"Ah’saa"}]	HSy			>aHoSaY	أَحْصَى	[{"r":"HSy","l":[">aHoSaY`",">aHoSaY`2"],"ln":[10,1]}]
664: [{"id":"k64","word":"مَهْد","wordEn":"Mahd"}]	mhd			mahod	مَهْد	[{"r":"mhd","l":["miha`d","mahod","yamohadu","ma`hiduwn","mah~ad","tamohiyd"],"ln":[7,5,1,1,1,1]}]
665: [{"id":"k64","word":"حُجُور","wordEn":"Hujoor"}]	Hjr			Hujuwr	حُجُور	[{"r":"Hjr","l":["HijaArap","Hajar","Hujuwr","Hijor","m~aHojuwr","Hujura`t"],"ln":[10,2,1,5,2,1]}]
666: [{"id":"d18","wordEn":"A’meeq","word":"عَمِيق","root":"Emq"},{"id":"k65","word":"عَمِيق","wordEn":"Ameeq"}]	Emq			Eamiyq	عَمِيق	[{"r":"Emq","l":["Eamiyq"],"ln":[1]}]
667: [{"id":"b122","word":"وِرْد","wordEn":"Wird"},{"id":"k66","word":"وِرْد","wordEn":"Wird"}]	wrd			wirod	وِرْد	[{"r":"wrd","l":[">aworada","wirod","maworuwd","waArid","warada","wariyd","warodap"],"ln":[1,2,1,3,2,1,1]}]
668: [{"id":"k67","word":"عَقَبَة","wordEn":"A’qabah"}]	Eqb			Eaqabap	عَقَبَة	[{"r":"Eqb","l":["Eaqib","EiqaAb","Ea`qibap",">aEoqaba","muEaq~iba`t","EuqobaY","muEaq~ib","EaAqaba","Euqob","yuEaq~ibo","Eaqabap"],"ln":[8,20,32,1,1,6,1,6,1,2,2]}]
669: [{"id":"k68","word":"بَيْت","wordEn":"Bayt"}]	byt			bayot	بَيْت	[{"r":"byt","l":["bayot","bay~ata","baya`t","yabiytu"],"ln":[65,4,3,1]}]
670: [{"id":"k68","word":"مَسْكَن","wordEn":"Masskan"}]	skn			masokan	مَسْكَن	[{"r":"skn","l":["sakana","masokanap","misokiyn","sakiynap","sakan","masokan","sik~iyn",">asokan","masokuwnap","saAkin"],"ln":[15,2,23,6,3,12,1,5,1,1]}]
671: [{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}]	Ahl,hlk			>ahol	أَهْل	[{"r":"Ahl","l":[">ahol"],"ln":[127]},{"r":"hlk","l":["t~aholukap",">aholaka","halaka","muholik","haAlik","maholik","muholakiyn","muholikiY"],"ln":[1,51,5,5,2,2,1,1]}]
672: [{"id":"k69","word":"سَاعَة","wordEn":"Saa’ah"}]	swE			saAEap	سَاعَة	[{"r":"swE","l":["saAEap","suwaAE"],"ln":[48,1]}]
673: [{"id":"k72","word":"خَيْل","wordEn":"Khayl"}]	xyl			xayol	خَيْل	[{"r":"xyl","l":["xayol","muxotaAl","yuxay~alu"],"ln":[5,3,1]}]
674: [{"id":"k72","word":"جِيَاد","wordEn":"Jiyaad"}]	jwd			jiyaAd	جِيَاد	[{"r":"jwd","l":["jiyaAd"],"ln":[1]}]
675: [{"id":"k73","word":"أَحَاطَ","wordEn":"Ahaata"}]	HwT			>aHaATa	أَحَاطَ	[{"r":"HwT","l":["muHiyT",">aHaATa","muHiyTap"],"ln":[9,17,2]}]
676: [{"id":"k73","word":"حَاقَ","wordEn":"Haaqa"}]	Hyq			HaAqa	حَاقَ	[{"r":"Hyq","l":["HaAqa"],"ln":[10]}]
677: [{"id":"t23","wordEn":"Qadara","word":"قَدَرَ"},{"id":"q1","word":"قَدَرَ","wordEn":"Qadara"}]	qdr			qadara	قَدَرَ	[{"r":"qdr","l":["qadiyr","qadar","qadara","qaAdir","qador","taqodiyr","qad~ara","miqodaAr","m~uqotadir","m~aqoduwr","quduwr"],"ln":[45,11,25,14,7,5,16,3,4,1,1]}]
678: [{"id":"q3","word":"قَبْر","wordEn":"Qabr"}]	qbr			qabor	قَبْر	[{"r":"qbr","l":["qabor",">aqobara","maqaAbir"],"ln":[6,1,1]}]
679: [{"id":"q5","word":"شُعُوب","wordEn":"Shuoob"}]	$Eb			$uEuwb	شُعُوب	[{"r":"$Eb","l":["$uEuwb","$uEab"],"ln":[1]}]
680: [{"id":"q5","word":"رَهْط","wordEn":"Raht"}]	rhT			rahoT	رَهْط	[{"r":"rhT","l":["rahoT"],"ln":[3]}]
681: [{"id":"q5","word":"أَسْبَاط","wordEn":"Assbaat"}]	sbT			>asobaAT	أَسْبَاط	[{"r":"sbT","l":[">asobaAT"],"ln":[5]}]
682: [{"id":"q6","word":"قَتَلَ","wordEn":"Qatala"}]	qtl			qatala	قَتَلَ	[{"r":"qtl","l":["qatala","qatolaY","qa`tala","qatol","qitaAl","{qotatala","qut~ilu","taqotiyl"],"ln":[83,1,54,10,13,4,4,1]}]
683: [{"id":"b88","word":"قَدَم","wordEn":"Qadam"},{"id":"q7","word":"قَدَم","wordEn":"Qadam"}]	qdm			qadam	قَدَم	[{"r":"qdm","l":["qad~ama","qadam","yasotaqodimu","qadimo","qadiym","musotaqodimiyn",">aqodamuwn","taqad~ama"],"ln":[27,8,4,2,3,1,1,2]}]
684: [{"id":"n15","word":"أَثَر","wordEn":"Athar"},{"id":"q7","word":"أَثَر","wordEn":"Athar"}]	Avr			>avar	أَثَر	[{"r":"Avr","l":[">avar","A^vara",">ava`rap","yu&ovaru"],"ln":[14,5,1,1]}]
685: [{"id":"q9","word":"فُرْقَان","wordEn":"Fur’qaan"}]	frq			furoqaAn	فُرْقَان	[{"r":"frq","l":["faraqo","furoqaAn","fariyq","far~aqu","tafar~aqa","taforiyq","firoqap","m~utafar~iquwn","m~utafar~iqap","firaAq","firoq","faAriqu","fa`riqa`t","faroq"],"ln":[5,7,33,9,8,1,1,1,1,2,1,1,1,1]}]
686: [{"id":"q9","word":"حَدِيث","wordEn":"Hadeeth"}]	Hdv			Hadiyv	حَدِيث	[{"r":"Hdv","l":["tuHad~ivu","Hadiyv","yuHodivu","muHodav"],"ln":[3,28,3,2]}]
687: [{"id":"AA48","word":"بُدْن","wordEn":"E’shaar"},{"id":"q10","word":"بُدْن","wordEn":"Budn"}]	bdn			budon	بُدْن	[{"r":"bdn","l":["badan","budon"],"ln":[1,1]}]
688: [{"id":"q10","word":"نُسُك","wordEn":"Nusuk"}]	nsk			nusuk	نُسُك	[{"r":"nsk","l":["mansak","nusuk","naAsikuw"],"ln":[4,2,1]}]
689: [{"id":"q10","word":"هَدْي","wordEn":"Hadee"}]	hdy			hadoy	هَدْي	[{"r":"hdy","l":["hadaY","hudFY","m~uhotaduwn","{hotadaY`","hadoy",">ahodaY`","muhotadiY","haAdiy","haAd","m~uhotad","hadiy~ap","ha`diY"],"ln":[144,85,17,40,7,7,1,2,7,3,2,1]}]
690: [{"id":"q11","word":"قَسَم","wordEn":"Qasam"}]	qsm			qasam	قَسَم	[{"r":"qsm","l":["qisomap","tasotaqosimu",">aqosamu","qaAsama","m~aqosuwm","muqotasimiyn","taqaAsamu","qasamo","muqas~ima`t","qasam"],"ln":[3,1,20,1,1,1,1,2,1,2]}]
691: [{"id":"h1","word":"يَمِين","wordEn":"Yameen"},{"id":"l15","word":"يَمِين","wordEn":"Yameen"},{"id":"q11","word":"يَمِين","wordEn":"Yameen"}]	ymn			yamiyn	يَمِين	[{"r":"ymn","l":["yamiyn",">ayoman","mayomanap"],"ln":[65,3,3]}]
692: [{"id":"t24","wordEn":"Naqada","word":"نَقَضَ"},{"id":"q12","word":"نَقَضَ","wordEn":"Naqada"}]	nqD			naqaDa	نَقَضَ	[{"r":"nqD","l":["naqaDato","naqoD",">anqaDa"],"ln":[6,2,1]}]
693: [{"id":"q13","word":"حُصُون","wordEn":"Husoon"}]	HSn			HuSuwn	حُصُون	[{"r":"HSn","l":["muHoSana`t","m~uHoSiniyn",">aHoSanato","taHaS~un","HuSuwn","m~uHaS~anap"],"ln":[8,2,5,1,1,1]}]
694: [{"id":"q13","word":"صَيَاصِي","wordEn":"Sayaasee"}]	SyS			SayaASiy	صَيَاصِي	[{"r":"SyS","l":["SayaASiy"],"ln":[1]}]
695: [{"id":"q13","word":"بُرُوج","wordEn":"Burooj"}]	brj			buruwj	بُرُوج	[{"r":"brj","l":["buruwj","mutabar~ija`t","tabar~ajo","tabar~uj"],"ln":[4,1,1,1]}]
696: [{"id":"q15","word":"قَمِيص","wordEn":"Qamees"}]	qmS			qamiyS	قَمِيص	[{"r":"qmS","l":["qamiyS"],"ln":[6]}]
697: [{"id":"q17","word":"حَصِير","wordEn":"Haseer"}]	HSr			HaSiyr	حَصِير	[{"r":"HSr","l":[">uHoSiru","HaSuwr","HaSirato","HaSiyr"],"ln":[2,1,2,1]}]
698: [{"id":"f1","word":"نَفَعَ","wordEn":"Nafa’aa"}]	nfE			nafaEa	نَفَعَ	[{"r":"nfE","l":["nafaEa","mana`fiE","nafoE"],"ln":[31,8,11]}]
699: [{"id":"k40","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f2","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f14","word":"فَتَحَ","wordEn":"Fataha"}]	ftH			fataHa	فَتَحَ	[{"r":"ftH","l":["fataHa","{sotafotaHu","fatoH","mafaAtiH","tufat~aHu","fa`tiHiyn","fat~aAH","m~ufat~aHap"],"ln":[16,3,12,3,1,1,1,1]}]
700: [{"id":"f2","word":"أَظْفَرَ","wordEn":"Azz’fara"}]	Zfr			>aZofara	أَظْفَرَ	[{"r":"Zfr","l":["Zufur",">aZofara"],"ln":[1,1]}]
701: [{"id":"f3","word":"مَيْسَرَة","wordEn":"Maysarah"}]	ysr			mayosarap	مَيْسَرَة	[{"r":"ysr","l":["yusor","{sotayosara","mayosir","mayosarap","yasiyr","m~ayosuwr","yas~ara","tayas~ara","yusoraY`"],"ln":[7,2,3,1,15,1,11,2,2]}]
702: [{"id":"f3","word":"طَوْل","wordEn":"Tawl"}]	Twl			Tawol	طَوْل	[{"r":"Twl","l":["Tawol","Tuwl","TaAla","taTaAwala","Tawiyl"],"ln":[3,1,3,1,2]}]
703: [{"id":"m36","word":"سَعَة","wordEn":"Sa’ah"},{"id":"f3","word":"سَعَة","wordEn":"Sa’ah"}]	wsE			saEap	سَعَة	[{"r":"wsE","l":["wa`siE","wusoE","muwsiE","saEap","wasiEa","wa`siEap"],"ln":[9,5,2,6,6,4]}]
704: [{"id":"f4","word":"رَحُبَ","wordEn":"Rahuba"}]	rHb			raHuba	رَحُبَ	[{"r":"rHb","l":["raHubato","maroHab"],"ln":[2,2]}]
705: [{"id":"f4","word":"وَسِعَ","wordEn":"Wasiaa"}]	wsE			wasiEa	وَسِعَ	[{"r":"wsE","l":["wa`siE","wusoE","muwsiE","saEap","wasiEa","wa`siEap"],"ln":[9,5,2,6,6,4]}]
706: [{"id":"f5","word":"مَلَك","wordEn":"Malak"}]	mlk			malak	مَلَك	[{"r":"mlk","l":["ma`lik","malak","mulok","malik","malakato","malakuwt","m~amoluwk","malok","ma`lik2","maliyk"],"ln":[3,88,48,15,44,4,1,1,1,1]}]
707: [{"id":"f5","word":"رُوح","wordEn":"Rooh"}]	rwH,jrH			ruwH	رُوح	[{"r":"rwH","l":["ruwH","riyH","r~awoH","turiyHu","rawaAH","r~ayoHaAn"],"ln":[21,29,3,1,1,2]},{"r":"jrH","l":["jawaAriH","juruwH","jaraHo","{jotaraHu"],"ln":[1,1,1,1]}]
708: [{"id":"f6","word":"بُعْد","wordEn":"Bu’od"}]	bEd			buEod	بُعْد	[{"r":"bEd","l":["baEod","baEiyd","baEudato","buEod","muboEaduwn","ba`Eido"],"ln":[199,25,2,7,1,1]}]
709: [{"id":"f7","word":"فِرْقَة","wordEn":"Firqah"}]	frq			firoqap	فِرْقَة	[{"r":"frq","l":["faraqo","furoqaAn","fariyq","far~aqu","tafar~aqa","taforiyq","firoqap","m~utafar~iquwn","m~utafar~iqap","firaAq","firoq","faAriqu","fa`riqa`t","faroq"],"ln":[5,7,33,9,8,1,1,1,1,2,1,1,1,1]}]
710: [{"id":"f7","word":"فَرِيق","wordEn":"Fareeq"}]	frq			fariyq	فَرِيق	[{"r":"frq","l":["faraqo","furoqaAn","fariyq","far~aqu","tafar~aqa","taforiyq","firoqap","m~utafar~iquwn","m~utafar~iqap","firaAq","firoq","faAriqu","fa`riqa`t","faroq"],"ln":[5,7,33,9,8,1,1,1,1,2,1,1,1,1]}]
711: [{"id":"f7","word":"زُمَر","wordEn":"Zumar"}]	zmr			zumar	زُمَر	[{"r":"zmr","l":["zumar"],"ln":[2]}]
712: [{"id":"f7","word":"شِيعَة","wordEn":"Sheeah"}]	$yE			$iyEap	شِيعَة	[{"r":"$yE","l":["$iyEap","ta$iyEa"],"ln":[11]}]
713: [{"id":"f12","word":"أَسْرَفَ","wordEn":"Assrafa"}]	srf			>asorafa	أَسْرَفَ	[{"r":"srf","l":["<isoraAf","musorif",">asorafa"],"ln":[2,15,6]}]
714: [{"id":"k40","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f2","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f14","word":"فَتَحَ","wordEn":"Fataha"}]	ftH			fataHa	فَتَحَ	[{"r":"ftH","l":["fataHa","{sotafotaHu","fatoH","mafaAtiH","tufat~aHu","fa`tiHiyn","fat~aAH","m~ufat~aHap"],"ln":[16,3,12,3,1,1,1,1]}]
715: [{"id":"AA36","word":"فَصَلَ","wordEn":"Fasala"},{"id":"f14","word":"فَصَلَ","wordEn":"Fasala"}]	fSl			faSala	فَصَلَ	[{"r":"fSl","l":["fiSaAl","faSala","faS~ala","fa`Siliyn","mufaS~al","tafoSiyl","m~ufaS~ala`t","faSol","faSiylat"],"ln":[3,5,17,1,1,5,1,9,1]}]
716: [{"id":"f14","word":"حَكَمَ","wordEn":"Hakama"}]	Hkm			Hakama	حَكَمَ	[{"r":"Hkm","l":["Hakiym","Hakama","Hikomap","Huk~aAm","m~uHokama`t","Hukom","Hakam","yataHaAkamu","yuHak~imu","Ha`kimiyn",">uHokimato",">aHokam","m~uHokamap"],"ln":[97,45,20,1,1,30,3,1,2,5,2,2,1]}]
717: [{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}]	qDy			qaDaY	قَضَى	[{"r":"qDy","l":["qaDaY`^","m~aqoDiy~","qaAD","qaADiyap"],"ln":[59,2,1,1]}]
718: [{"id":"g1","word":"كَهْف","wordEn":"Kahff"}]	khf			kahof	كَهْف	[{"r":"khf","l":["kahof"],"ln":[6]}]
719: [{"id":"g2","word":"أَلْهَى","wordEn":"Alhaa"}]	lhw			>alohaY	أَلْهَى	[{"r":"lhw","l":["lahow",">alohaY`","laAhiyap","talah~aY`"],"ln":[10,4,1,1]}]
720: [{"id":"A19","word":"ظَهَرَ","wordEn":"Tha’ha’ra"},{"id":"g3","word":"ظَهَرَ","wordEn":"Thahara"},{"id":"D1","word":"ظَهَرَ","wordEn":"Zahara"}]	Zhr			Zahara	ظَهَرَ	[{"r":"Zhr","l":["taZa`haru","Zahor","Za`hir","Zahara","Za`haru",">aZohara","Zihoriy~","Zahiyr","Z~ahiyrap","Za`hirap"],"ln":[2,15,8,10,6,8,1,6,1,2]}]
721: [{"id":"g4","word":"غَبَرَة","wordEn":"Ghabarah"}]	gbr			gabarap	غَبَرَة	[{"r":"gbr","l":["ga`biriyn","gabarap"],"ln":[7,1]}]
722: [{"id":"g4","word":"نَقْع","wordEn":"Naq’e"}]	nqE			naqoE	نَقْع	[{"r":"nqE","l":["naqoE"],"ln":[1]}]
723: [{"id":"g5","word":"سَخَط","wordEn":"Sakhat"}]	sxT			saxaT	سَخَط	[{"r":"sxT","l":["saxaT","saxiTa",">asoxaTa"],"ln":[1,2,1]}]
724: [{"id":"g5","word":"غَضَب","wordEn":"Ghadab"}]	gDb			gaDab	غَضَب	[{"r":"gDb","l":["magoDuwb","gaDab","gaDiba","gaDoba`n","muga`Dib"],"ln":[1,14,6,2,1]}]
725: [{"id":"g6","word":"أَسْخَطَ","wordEn":"Asskhata"}]	sxT			>asoxaTa	أَسْخَطَ	[{"r":"sxT","l":["saxaT","saxiTa",">asoxaTa"],"ln":[1,2,1]}]
726: [{"id":"g7","word":"غَمّ","wordEn":"Ghamm"}]	gmm			gam~	غَمّ	[{"r":"gmm","l":["gama`m","gam~","gum~ap"],"ln":[4,6,1]}]
727: [{"id":"g7","word":"حُزْن","wordEn":"Huzn"}]	Hzn			Huzon	حُزْن	[{"r":"Hzn","l":["yaHozun","Hazan","Huzon"],"ln":[37,3,2]}]
728: [{"id":"dd3","wordEn":"Khasha’aa","word":"خَشَعَ","root":"x$E"},{"id":"n31","word":"خَشَعَ","wordEn":"Khasha’aa"},{"id":"E2","word":"خَشَعَ","wordEn":"Khasha’aa"}]	x$E			xa$aEa	خَشَعَ	[{"r":"x$E","l":["xaA$iE","xu$uwE","xa$aEati"],"ln":[14,1,2]}]
729: [{"id":"E3","word":"أَحْبَار","wordEn":"Ahbaar"}]	Hbr			>aHobaAr	أَحْبَار	[{"r":"Hbr","l":[">aHobaAr","yuHobaru"],"ln":[4,2]}]
730: [{"id":"E4","word":"بِيَع","wordEn":"Beya’a"}]	byE			biyaE	بِيَع	[{"r":"byE","l":["bayoE","tabaAyaEo","baAyaEo","biyaE"],"ln":[7,1,6,1]}]
731: [{"id":"E5","word":"عَذَاب","wordEn":"Athaab"}]	E*b			Ea*aAb	عَذَاب	[{"r":"E*b","l":["Ea*aAb","Ea*~aba","muEa*~ib","Ea*ob","muEa*~abiyn"],"ln":[322,41,4,2,4]}]
732: [{"id":"b29","word":"عِقَاب","wordEn":"E’qaab"},{"id":"E5","word":"عِقَاب","wordEn":"Eqaab"}]	Eqb			EiqaAb	عِقَاب	[{"r":"Eqb","l":["Eaqib","EiqaAb","Ea`qibap",">aEoqaba","muEaq~iba`t","EuqobaY","muEaq~ib","EaAqaba","Euqob","yuEaq~ibo","Eaqabap"],"ln":[8,20,32,1,1,6,1,6,1,2,2]}]
733: [{"id":"E5","word":"بَأْس","wordEn":"Ba’ass"}]	bAs			ba>os	بَأْس	[{"r":"bAs","l":["bi}osa","ba>osaA^'","ba>os","ba_#iys","tabota}iso","baA^}is"],"ln":[40,4,25,1,2,1]}]
734: [{"id":"E5","word":"نَكِير","wordEn":"Nakeer"}]	nkr			nakiyr	نَكِير	[{"r":"nkr","l":["munkar","nakira","munkiruwn","yunkiru","m~unkirap","n~ukor","nakiyr","nak~iru",">ankar","n~akiyr","n~ukur"],"ln":[18,1,3,3,1,3,4,1,1,1,1]}]
735: [{"id":"b29","word":"وَبَال","wordEn":"Wabaal"},{"id":"E5","word":"وَبَال","wordEn":"Wabaal"}]	wbl			wabaAl	وَبَال	[{"r":"wbl","l":["waAbil","wabaAl","wabiyl"],"ln":[3,4,1]}]
736: [{"id":"E6","word":"عَذَّبَ","wordEn":"Ath’thaba"}]	E*b			Ea*~aba	عَذَّبَ	[{"r":"E*b","l":["Ea*aAb","Ea*~aba","muEa*~ib","Ea*ob","muEa*~abiyn"],"ln":[322,41,4,2,4]}]
737: [{"id":"h16","word":"حُسْبَان","wordEn":"Hussbaan"},{"id":"E7","word":"حُسْبَان","wordEn":"Husbaan"}]	Hsb			HusobaAn	حُسْبَان	[{"r":"Hsb","l":["HisaAb","Hasob","Hasiba","HaAsabo","Hasiyb","Ha`sibiyn","HusobaAn","yaHotasibu"],"ln":[39,11,44,3,4,2,3,3]}]
738: [{"id":"h16","word":"حَاصِب","wordEn":"Haasib"},{"id":"E7","word":"حَاصِب","wordEn":"Haasib"}]	HSb			HaASib	حَاصِب	[{"r":"HSb","l":["HaASib","HaSab"],"ln":[4,1]}]
739: [{"id":"A28","word":"صَيْحَة","wordEn":"Say’hah"},{"id":"E7","word":"صَيْحَة","wordEn":"Sayhah"}]	SyH			SayoHap	صَيْحَة	[{"r":"SyH","l":["SayoHap"],"ln":[13]}]
740: [{"id":"E7","word":"زَجْر","wordEn":"Zajrr"}]	zjr			zajor	زَجْر	[{"r":"zjr","l":["z~a`jira`t","zajor","zajorap","muzodajar","{zodujira"],"ln":[1,1,2,1,1]}]
741: [{"id":"E8","word":"أَكْرَمَ","wordEn":"Akrama"}]	krm			>akorama	أَكْرَمَ	[{"r":"krm","l":["kariym",">akorama","kar~amo","m~ukoramuwn","m~ukorim",">akoram","<ikoraAm","m~ukar~amap"],"ln":[30,4,2,5,1,2,2,1]}]
742: [{"id":"E9","word":"أَكْرَم","wordEn":"Akram"}]	krm			>akoram	أَكْرَم	[{"r":"krm","l":["kariym",">akorama","kar~amo","m~ukoramuwn","m~ukorim",">akoram","<ikoraAm","m~ukar~amap"],"ln":[30,4,2,5,1,2,2,1]}]
743: [{"id":"E9","word":"وَجِيه","wordEn":"Wajeeh"}]	wjh			wajiyh	وَجِيه	[{"r":"wjh","l":["wajoh","wijohap","wajiyh","waj~aho","tawaj~aha"],"ln":[72,1,2,2,1]}]
744: [{"id":"E10","word":"حِجْر","wordEn":"Hijr"}]	Hjr			Hijor	حِجْر	[{"r":"Hjr","l":["HijaArap","Hajar","Hujuwr","Hijor","m~aHojuwr","Hujura`t"],"ln":[10,2,1,5,2,1]}]
745: [{"id":"E10","word":"حُلُم","wordEn":"Hulm"}]	Hlm			Hulum	حُلُم	[{"r":"Hlm","l":["Haliym","Hulum"],"ln":[15,6]}]
746: [{"id":"E13","word":"وَعِيد","wordEn":"Waeed"}]	wEd			waEiyd	وَعِيد	[{"r":"wEd","l":["wa`Eado","waEada","m~iyEaAd","waEod","tuwEidu","tawaAEad","m~awoEidap","m~awoEid","waEiyd","mawoEuwd"],"ln":[4,70,6,49,1,1,1,12,6,1]}]
747: [{"id":"E13","word":"عَهْد","wordEn":"Ahd"}]	Ehd			Eahod	عَهْد	[{"r":"Ehd","l":["Eahod","Ea`hada","Eahida"],"ln":[29,11,6]}]
748: [{"id":"E13","word":"إِصْر","wordEn":"Essr"}]	ASr			<iSor	إِصْر	[{"r":"ASr","l":["<iSor"],"ln":[3]}]
749: [{"id":"E13","word":"عُقُود","wordEn":"Uqood"}]	Eqd			Euquwd	عُقُود	[{"r":"Eqd","l":["Euqodap","Eaqadato","Euquwd","Eaq~ad"],"ln":[4,1,1,1]}]
750: [{"id":"A19","word":"ظَهَرَ","wordEn":"Tha’ha’ra"},{"id":"g3","word":"ظَهَرَ","wordEn":"Thahara"},{"id":"D1","word":"ظَهَرَ","wordEn":"Zahara"}]	Zhr			Zahara	ظَهَرَ	[{"r":"Zhr","l":["taZa`haru","Zahor","Za`hir","Zahara","Za`haru",">aZohara","Zihoriy~","Zahiyr","Z~ahiyrap","Za`hirap"],"ln":[2,15,8,10,6,8,1,6,1,2]}]
751: [{"id":"b98","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D1","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D2","word":"جَهَرَ","wordEn":"Jahara"}]	jhr			jahara	جَهَرَ	[{"r":"jhr","l":["jahorap","jahor","jahara","jihaAr"],"ln":[3,7,5,1]}]
752: [{"id":"D1","word":"بَدَا","wordEn":"Badaa"}]	bdw			badaA	بَدَا	[{"r":"bdw","l":["yubodiYa","badaA","baAdiY","badow","baAd","baAduwn","mubodiy"],"ln":[15,11,1,1,1,1,1]}]
753: [{"id":"D1","word":"حَصْحَصَ","wordEn":"Hass’hasa"}]	HSHS			HaSoHaSa	حَصْحَصَ	[{"r":"HSHS","l":["HaSoHaSa"],"ln":[1]}]
754: [{"id":"D2","word":"أَظْهَرَ","wordEn":"Azhara"}]	Zhr			>aZohara	أَظْهَرَ	[{"r":"Zhr","l":["taZa`haru","Zahor","Za`hir","Zahara","Za`haru",">aZohara","Zihoriy~","Zahiyr","Z~ahiyrap","Za`hirap"],"ln":[2,15,8,10,6,8,1,6,1,2]}]
755: [{"id":"b98","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D1","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D2","word":"جَهَرَ","wordEn":"Jahara"}]	jhr			jahara	جَهَرَ	[{"r":"jhr","l":["jahorap","jahor","jahara","jihaAr"],"ln":[3,7,5,1]}]
756: [{"id":"T1","word":"طَاقَة","wordEn":"Taaqah"}]	Twq			TaAqap	طَاقَة	[{"r":"Twq","l":["yuTiyqu","TaAqap","yuTaw~aqu"],"ln":[1,2,1]}]
757: [{"id":"T1","word":"مِرَّة","wordEn":"Mirrah"}]	mrr			mir~ap	مِرَّة	[{"r":"mrr","l":["mar~ap","mar~a","mar~a`t","mar~","mir~ap","m~usotamir~",">amar~"],"ln":[19,10,1,1,1,2,1]}]
758: [{"id":"T1","word":"رُكْن","wordEn":"Rukn"}]	rkn			rukon	رُكْن	[{"r":"rkn","l":["rukon","tarokanu"],"ln":[2,2]}]
759: [{"id":"T3","word":"طَرِيقَة","wordEn":"Tareeqah"}]	Trq			Tariyqap	طَرِيقَة	[{"r":"Trq","l":["Tariyq","Tariyqap","T~aAriq"],"ln":[4,5,2]}]
760: [{"id":"d33","wordEn":"Sahree’ah","word":"شَرِيعَة","root":"$rE"},{"id":"T3","word":"شَرِيعَة","wordEn":"Sharee’ah"}]	$rE			$ariyEap	شَرِيعَة	[{"r":"$rE","l":["$iroEap","$ur~aE","$araEa","$ariyEap"],"ln":[1,1,2]}]
761: [{"id":"T3","word":"مِنْهَاج","wordEn":"Minhaaj"}]	nhj			minohaAj	مِنْهَاج	[{"r":"nhj","l":["minohaAj"],"ln":[1]}]
762: [{"id":"T3","word":"خُلُق","wordEn":"Khuluq"}]	xlq			xuluq	خُلُق	[{"r":"xlq","l":["xalaqa","xala`q","xaloq","xa`liq","xal~a`q","muxal~aqap","xuluq","{xotila`q"],"ln":[184,6,52,12,2,2,2,1]}]
763: [{"id":"T4","word":"هَمَزَ","wordEn":"Hamaza"}]	hmz			hamaza	هَمَزَ	[{"r":"hmz","l":["hamaza`t","ham~aAz","humazap"],"ln":[1,1,1]}]





[{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}],skn
[{"id":"D1","word":"بَدَا","wordEn":"Badaa"}],bdw
[{"id":"A1","word":"حَضَرَ","wordEn":"Ha’darr","root":"HDr","$$hashKey":"011"}],HDr
[],swy,Awy
[{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}],skn
[{"id":"A11","word":"يَسِير","wordEn":"Yaseer"}],ysr
[{"id":"A15","word":"جَذْوَة","wordEn":"Jath’wah"}],j*w
[{"id":"A19","word":"ظَهَرَ","wordEn":"Tha’ha’ra"},{"id":"g3","word":"ظَهَرَ","wordEn":"Thahara"},{"id":"D1","word":"ظَهَرَ","wordEn":"Zahara"}],Zhr
[{"id":"A19","word":"عَلِمَ","wordEn":"A’lima"}],Elm
[{"id":"A20","word":"عَلَّمَ","wordEn":"Allama"}],Elm
[{"id":"A20","word":"نَبَّأَ","wordEn":"Nab’ba’a"}],nbA
[{"id":"A24","word":"حِذْر","wordEn":"Hithir"},{"id":"dd3","wordEn":"Hithrr","word":"حِذْر","root":"H*r"}],H*r
[{"id":"A25","word":"أَتَى","wordEn":"Ataa"},{"id":"d34","wordEn":"Ataa","word":"أَتَى","root":"Aty"}],Aty
[{"id":"A25","word":"هَيْتَ","wordEn":"Hayta"}],hyt
[{"id":"A25","word":"تَعَال","wordEn":"Ta’aal"}],Elw
[{"id":"A28","word":"صَدّ","wordEn":"Sadd"}],Sdq,Sdd,Sdy,SdE
[{"id":"A28","word":"هَمْس","wordEn":"Hamss"}],hms
[{"id":"A28","word":"تَصْدِيَة","wordEn":"Tass’diyah"}],Sdy
[{"id":"A28","word":"رِكْز","wordEn":"rikz"}],rkz
[{"id":"A28","word":"صَيْحَة","wordEn":"Say’hah"},{"id":"E7","word":"صَيْحَة","wordEn":"Sayhah"}],SyH
[{"id":"A28","word":"تَغَيُّظ","wordEn":"Ta’ghayyuz"}],gyZ
[{"id":"A28","word":"هَدّ","wordEn":"Hadda"}],hdd
[{"id":"A28","word":"قَارِعَة","wordEn":"Qaari’ah"}],qrE
[{"id":"A29","word":"رُوَيْد","wordEn":"Ruwayd"}],rwd
[{"id":"A29","word":"عُرْف","wordEn":"Urff"}],Erf
[{"id":"A29","word":"يُسْر","wordEn":"Yussr"}],ysr
[{"id":"AA1","word":"فَارَ","wordEn":"Faara"}],fwr
[{"id":"AA2","word":"كَعْب","wordEn":"Ka’ab"}],kEb
[{"id":"AA2","word":"سَمْك","wordEn":"Sam’k"}],smk
[{"id":"AA3","word":"جَرَم","wordEn":"Jarama"}],jrm
[{"id":"AA4","word":"نَزَلَ","wordEn":"Nazala"}],nzl
[{"id":"AA4","word":"وَضَعَ","wordEn":"Wada’a"}],wDE
[{"id":"AA5","word":"فَرِحَ","wordEn":"Fariha"}],frH
[{"id":"AA7","word":"حَمَلَ","wordEn":"Hamala"}],Hml
[{"id":"AA7","word":"بَعَثَ","wordEn":"Ba’a’tha"},{"id":"b65","word":"بَعَثَ","wordEn":"Ba’a’tha"}],bEv
[{"id":"AA8","word":"قَامَ","wordEn":"Qaama"}],qwm
[{"id":"AA10","word":"عُتُلّ","wordEn":"Utull"}],Etl
[{"id":"AA10","word":"فَظّ","wordEn":"Fazz"}],fZZ
[{"id":"AA12","word":"نِعْمَ","wordEn":"Ni’ema"}],nEm
[{"id":"AA12","word":"خَيْر","wordEn":"Khayr"},{"id":"m3","word":"خَيْر","wordEn":"Khayr"}],xyr
[{"id":"AA12","word":"حَسُنَ","wordEn":"Hasuna"}],Hsn
[{"id":"AA13","word":"نَكِرَ","wordEn":"Nakira"},{"id":"b35","word":"نَكِرَ","wordEn":"Nakira"}],nkr
[{"id":"AA14","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n19","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n34","word":"أَنْعَمَ","wordEn":"An’ama"}],nEm
[{"id":"AA14","word":"أَحْسَنَ","wordEn":"Ahsana"},{"id":"n34","word":"أَحْسَنَ","wordEn":"Ah’sana"}],Hsn
[{"id":"AA15","word":"مَلْك","wordEn":"Malk"}],mlk
[{"id":"AA15","word":"أَمْكَنَ","wordEn":"Amkana"}],mkn
[{"id":"AA17","word":"قَرْض","wordEn":"Qard"}],qrD
[{"id":"AA18","word":"أَرَادَ","wordEn":"Araada"}],rwd
[{"id":"AA18","word":"عَزَمَ","wordEn":"Azama"}],Ezm
[{"id":"AA23","word":"أَشَارَ","wordEn":"A’shaara"}],$wr
[{"id":"AA24","word":"تَبِعَ","wordEn":"Tabiaa"}],tbE
[{"id":"AA24","word":"أُسْوَة","wordEn":"Uss’wah"}],Asw
[{"id":"AA24","word":"أَطَاعَ","wordEn":"Ataa’aa"}],TwE
[{"id":"AA24","word":"أَسْلَمَ","wordEn":"Asslama"}],slm
[{"id":"AA25","word":"قَصْد","wordEn":"Qassd"},{"id":"d10","wordEn":"Qassd","word":"قَصْد","root":"qsd"}],qSd
[{"id":"AA25","word":"وَسَطْ","wordEn":"Wasat"}],wsT
[{"id":"AA26","word":"قِطّ","wordEn":"Qitt"}],qTT
[{"id":"AA26","word":"صُحُف","wordEn":"Suhuff"},{"id":"k11","word":"صُحُف","wordEn":"Suhuff"}],SHf
[{"id":"AA27","word":"وَيْل","wordEn":"Wayl"}],-
[{"id":"AA29","word":"شَهِدَ","wordEn":"Shahida"}],$hd
[{"id":"AA30","word":"جَمَعَ","wordEn":"Jama’aa"}],jmE
[{"id":"AA30","word":"حَشَرَ","wordEn":"Hashara"}],H$r
[{"id":"AA30","word":"خَزَنَ","wordEn":"Khazana"}],xzn
[{"id":"AA32","word":"فَرْد","wordEn":"Farrd"}],frd
[{"id":"AA34","word":"أَرْكَسَ","wordEn":"Arrkasa"}],rks
[{"id":"AA36","word":"فَصَلَ","wordEn":"Fasala"},{"id":"f14","word":"فَصَلَ","wordEn":"Fasala"}],fSl
[{"id":"AA37","word":"مَتَى","wordEn":"Mataa"},{"id":"k10","word":"مَتَى","wordEn":"Mataa"}],-
[{"id":"AA38","word":"حَوَايَا","wordEn":"Hawaayaa"}],Hwy
[{"id":"AA41","word":"أَعْمَى","wordEn":"Aa’maa"}],Emy
[{"id":"AA43","word":"أَبَى","wordEn":"Abaa"}],Aby
[{"id":"AA43","word":"كَفَرَ","wordEn":"Kafara"}],kfr
[{"id":"AA46","word":"حَفَدَة","wordEn":"Hafadah"}],Hfd
[{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}],Ahl,hlk
[{"id":"AA47","word":"عِهْن","wordEn":"Eh’n"}],Ehn
[{"id":"AA48","word":"هِيم","wordEn":"Jamal"},{"id":"b122","word":"هِيم","wordEn":"Heem"}],-,bhm,hym
[{"id":"AA48","word":"نَاقَة","wordEn":"Rikaab"}],nwq
[{"id":"AA48","word":"ضَامِر","wordEn":"Naaqah"},{"id":"d4","wordEn":"Daamir","word":"ضَامِر","root":"Dmr"}],Dmr
[{"id":"AA48","word":"عِشَار","wordEn":"Daamir"}],E$r
[{"id":"AA48","word":"بُدْن","wordEn":"E’shaar"},{"id":"q10","word":"بُدْن","wordEn":"Budn"}],bdn
[{"id":"AA48","word":"بَحِيرَة","wordEn":"Budn"}],bHr
[{"id":"AA48","word":"وَصِيلَة","wordEn":"Waseelah"}],wSl
[{"id":"AA49","word":"سِنَة","wordEn":"Sinah"}],wsn
[{"id":"b2","word":"طُوبَى","wordEn":"Toobaa"}],Tyb
[{"id":"b3","word":"قَوْل","wordEn":"Qawl"}],qwl
[{"id":"b3","word":"كَلِمَة","wordEn":"Kalimah"}],klm
[{"id":"b4","word":"خَاطَبَ","wordEn":"Khaataba"}],xTb
[{"id":"b6","word":"مُزْن","wordEn":"Muzn"}],mzn
[{"id":"b8","word":"طَلّ","wordEn":"Ta’l"}],Tlq,Tll
[{"id":"b8","word":"وَدْق","wordEn":"Wadq"}],wdq
[{"id":"b12","word":"أَبْقَى","wordEn":"Ab’qaa"}],bqy
[{"id":"b16","word":"جِبْت","wordEn":"Jibt"}],jbt
[{"id":"b17","word":"بَرْق","wordEn":"Barq"}],brq
[{"id":"b17","word":"رَعْد","wordEn":"Ra’ad"}],rEd
[{"id":"b17","word":"صَاعِقَة","wordEn":"Saa’eqah"}],SEq
[{"id":"b18","word":"وَقَى","wordEn":"Waqaa"}],wqy
[{"id":"b18","word":"أَحْصَنَ","wordEn":"Ah’sana"}],HSn
[{"id":"b19","word":"حَذَر","wordEn":"Hathar"}],H*r
[{"id":"b20","word":"وَلِيد","wordEn":"Waleed"},{"id":"b67","word":"وَلِيد","wordEn":"Waleed"}],wld
[{"id":"b20","word":"طِفْل","wordEn":"Tifl"}],Tfl
[{"id":"b20","word":"صَبِي","wordEn":"Sabee"}],Sbw
[{"id":"b21","word":"دَحَى","wordEn":"Dahaa"}],dHw
[{"id":"b21","word":"طَحَى","wordEn":"Tahaa"}],THw
[{"id":"b23","word":"أَكْدَى","wordEn":"Ak’daa"}],kdy
[{"id":"b24","word":"حُسُوم","wordEn":"Hosoom"},{"id":"n10","word":"حُسُوم","wordEn":"Husoom"},{"id":"l12","word":"حُسُوم","wordEn":"Hussom"}],Hsm
[{"id":"b25","word":"لَعَنَ","wordEn":"La’ana"}],lEn
[{"id":"b25","word":"بَعُدَ","wordEn":"Ba’oda"}],bEd
[{"id":"b29","word":"عَدْل","wordEn":"Adl"},{"id":"b36","word":"عَدْل","wordEn":"Adl"}],Edl
[{"id":"b29","word":"أَجْر","wordEn":"Ajr"}],Ajr,jrm
[{"id":"b29","word":"ثَوَاب","wordEn":"Thawaab"}],vwb
[{"id":"b29","word":"عِقَاب","wordEn":"E’qaab"},{"id":"E5","word":"عِقَاب","wordEn":"Eqaab"}],Eqb
[{"id":"b29","word":"وَبَال","wordEn":"Wabaal"},{"id":"E5","word":"وَبَال","wordEn":"Wabaal"}],wbl
[{"id":"b29","word":"قِصَاص","wordEn":"Qisaas"}],qSS
[{"id":"b30","word":"جَزَى","wordEn":"Jazaa"},{"id":"k5","word":"جَزَى","wordEn":"Jazaa"}],jzy
[{"id":"b31","word":"عَاقَبَ","wordEn":"Aaa’qaba"}],Eqb
[{"id":"b33","word":"سَيِّئَة","wordEn":"Sayyiah"}],swA
[{"id":"AA13","word":"نَكِرَ","wordEn":"Nakira"},{"id":"b35","word":"نَكِرَ","wordEn":"Nakira"}],nkr
[{"id":"b29","word":"عَدْل","wordEn":"Adl"},{"id":"b36","word":"عَدْل","wordEn":"Adl"}],Edl
[{"id":"b38","word":"صَبَرَ","wordEn":"Sabara"}],Sbr
[{"id":"b40","word":"كِبَر","wordEn":"Kibar"}],kbr
[{"id":"b40","word":"جَدّ","wordEn":"Jadd"}],jdd
[{"id":"b41","word":"عَفَا","wordEn":"Afaa"},{"id":"m33","word":"عَفَا","wordEn":"Afaa"}],Efw
[{"id":"b41","word":"أَرْبَى","wordEn":"Ar’baa"}],rbw
[{"id":"b42","word":"قَرْيَة","wordEn":"Qarryah"}],qry
[{"id":"b42","word":"أَعْرَاب","wordEn":"A’a’raab"}],Erb
[{"id":"b43","word":"غَنَم","wordEn":"Ghanam"}],gnm
[{"id":"b43","word":"مَعْز","wordEn":"Ma’az"}],Ezl,mEz
[{"id":"b45","word":"رَفَعَ","wordEn":"Rafa’aa"},{"id":"h4","word":"رَفَعَ","wordEn":"Rafa’aa"}],rfE
[{"id":"b46","word":"عَلَا","wordEn":"Alaa"}],Eln
[{"id":"b47","word":"جَعَلَ","wordEn":"Ja’a’la"}],jEl
[{"id":"b47","word":"بَنَى","wordEn":"Banaa"}],bny
[{"id":"b51","word":"ثَقُلَ","wordEn":"Thaqula"}],vql
[{"id":"b52","word":"كَهْل","wordEn":"Kahl"}],khl
[{"id":"b52","word":"عَجُوز","wordEn":"Ajooz"}],Ejz
[{"id":"b52","word":"عَوَان","wordEn":"Awaan"}],Ewn
[{"id":"b52","word":"فَارِض","wordEn":"Faarid"}],frD
[{"id":"b55","word":"أَفَاضَ","wordEn":"Afaad"},{"id":"m27","word":"أَفَاضَ","wordEn":"Afaada"}],fyD
[{"id":"b57","word":"إِفْك","wordEn":"Ifk"}],Afk
[{"id":"b59","word":"أَبَقَ","wordEn":"Abaqa"}],Abq
[{"id":"b59","word":"زَهَقَ","wordEn":"Zahaqa"},{"id":"n22","word":"زَهَقَ","wordEn":"Zahaqa"}],zhq
[{"id":"b60","word":"إِخْوَة","wordEn":"Ikh’wah"}],Axw
[{"id":"b62","word":"جُوع","wordEn":"Jooa"}],jwE
[{"id":"b62","word":"مَسْغَبَة","wordEn":"Mas’ghaba"}],sgb
[{"id":"b62","word":"مَخْمَصَة","wordEn":"Makh’masa"}],xmS
[{"id":"b62","word":"خَصَاصَة","wordEn":"Khasaasah"}],xSS
[{"id":"b65","word":"أَرْسَلَ","wordEn":"Ar’sala"}],rsl
[{"id":"AA7","word":"بَعَثَ","wordEn":"Ba’a’tha"},{"id":"b65","word":"بَعَثَ","wordEn":"Ba’a’tha"}],bEv
[{"id":"b66","word":"ضَرَبَ","wordEn":"Daraba"},{"id":"m1","word":"ضَرَبَ","wordEn":"Daraba"}],Drb
[{"id":"b20","word":"وَلِيد","wordEn":"Waleed"},{"id":"b67","word":"وَلِيد","wordEn":"Waleed"}],wld
[{"id":"b68","word":"قَعَدَ","wordEn":"Qa’ada"}],qEd
[{"id":"b69","word":"سَقِيم","wordEn":"Saqeem"}],sqm
[{"id":"b69","word":"حَرَض","wordEn":"Harad"}],HrD
[{"id":"b71","word":"عَدَلَ","wordEn":"Adala"}],Edl
[{"id":"b71","word":"ظَلَمَ","wordEn":"Zalama"},{"id":"k20","word":"ظَلَمَ","wordEn":"Zalama"}],Zlm
[{"id":"b71","word":"عَالَ","wordEn":"Aaala"}],Elw
[{"id":"b73","word":"قَلَى","wordEn":"Qalaa"}],qly
[{"id":"b74","word":"قَدْ","wordEn":"Qadd"}],qdr,qdH
[{"id":"b75","word":"فَزِعَ","wordEn":"Fazi’aa"}],fzE
[{"id":"b77","word":"شَقِي","wordEn":"Shaqee"}],$qw
[{"id":"b79","word":"هَزْل","wordEn":"Hazl"}],hzl
[{"id":"b80","word":"صَعِقَ","wordEn":"Sa’eqa"}],SEq
[{"id":"b80","word":"غَمَرَ","wordEn":"Ghamara"}],gmr
[{"id":"b80","word":"غَشِيَ","wordEn":"Ghashiya"}],g$w
[{"id":"b81","word":"حَوْل","wordEn":"Hawl"}],Hwl
[{"id":"b82","word":"طَهُور","wordEn":"Tahoor"}],Thr
[{"id":"b84","word":"وَجَدَ","wordEn":"Wajada"}],wjd
[{"id":"b84","word":"أَدْرَكَ","wordEn":"Ad’raka"}],drk
[{"id":"b85","word":"حَمِيم","wordEn":"Hameem"},{"id":"d24","wordEn":"Hameem","word":"حَمِيم","root":"Hmm"}],Hmm
[{"id":"b85","word":"غَوْر","wordEn":"Ghawr"}],gwr
[{"id":"b85","word":"مَعِين","wordEn":"Maeen"}],jmE
[{"id":"b85","word":"عَذْب","wordEn":"Ath’b"}],E*b
[{"id":"b85","word":"فُرَات","wordEn":"Furaat"}],frt
[{"id":"b86","word":"أَوْدِيَة","wordEn":"Awdiyah"}],wdy
[{"id":"b86","word":"عَيْن","wordEn":"Ayn"}],tbE,Eyn
[{"id":"b86","word":"سَرِي","wordEn":"Sariee"}],xsr,srE,sry
[{"id":"b86","word":"يَمّ","wordEn":"Yamm"}],ymm
[{"id":"b86","word":"بَحْر","wordEn":"Bahr"}],bHr
[{"id":"b88","word":"قَدَم","wordEn":"Qadam"},{"id":"q7","word":"قَدَم","wordEn":"Qadam"}],qdm
[{"id":"b89","word":"حَجَر","wordEn":"Hajar"}],Hjr
[{"id":"b89","word":"حِجَارَة","wordEn":"Hijaarah"}],Hjr
[{"id":"b89","word":"حَصَب","wordEn":"Hasab"}],HSb
[{"id":"b90","word":"خَلْف","wordEn":"Khalf"},{"id":"b127","word":"خَلْف","wordEn":"Khalf"}],xlf
[],sqT
[{"id":"b92","word":"قَدِيم","wordEn":"Qadeem"}],qdm
[{"id":"b92","word":"عَتِيق","wordEn":"Ateeq"}],Etq
[{"id":"b93","word":"غُلْف","wordEn":"Ghulf"}],glf
[{"id":"b93","word":"سِتْر","wordEn":"Sitr"}],str
[{"id":"b93","word":"حِجَاب","wordEn":"Hijaab"}],Hjb
[{"id":"b93","word":"سُرَادِق","wordEn":"Suraadiq"}],srdq
[{"id":"b96","word":"قَرَأَ","wordEn":"Qara’aa"}],qrA
[{"id":"b97","word":"وَدَّ","wordEn":"Wad’da"}],wdd,swd,wdE
[{"id":"b98","word":"دَعَا","wordEn":"Da’aa"},{"id":"d12","wordEn":"Da’aa","word":"دَعَا","root":"dEw"}],dEw
[{"id":"b98","word":"أَذَّنَ","wordEn":"Ath’thana"}],A*n
[{"id":"b98","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D1","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D2","word":"جَهَرَ","wordEn":"Jahara"}],jhr
[{"id":"b99","word":"أَخَذَ","wordEn":"Akhatha"},{"id":"l16","word":"أَخَذَ","wordEn":"Akhatha"}],Ax*
[{"id":"b100","word":"وَزَر","wordEn":"Wazar"}],wzr
[{"id":"b100","word":"مَفَازَة","wordEn":"Mafaazah"}],fwz
[{"id":"b100","word":"مُلْتَحَد","wordEn":"Mul’tahad"}],lHd
[{"id":"b102","word":"سَأَلَ","wordEn":"Sa’a’la"},{"id":"m6","word":"سَأَلَ","wordEn":"Sa’ala"}],sAl
[{"id":"b103","word":"كُل","wordEn":"Kul"}],kll,Akl
[{"id":"b103","word":"كَامِل","wordEn":"Kaamil"}],kml
[{"id":"b103","word":"سَلَم","wordEn":"Salam"}],slm
[{"id":"b104","word":"أَوْفَى","wordEn":"Awfaa"}],wfy
[{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}],qDy
[{"id":"b104","word":"أَسْبَغَ","wordEn":"Ass’bagha"}],sbg
[{"id":"b105","word":"لِبَاس","wordEn":"Libaas"}],lbs
[{"id":"b106","word":"صَخْرَة","wordEn":"Sakh’rah"}],Sxr
[{"id":"b107","word":"عَرَفَ","wordEn":"Arafa"}],-,Erf
[{"id":"b108","word":"سَابِق","wordEn":"Saabiq"}],sbq
[{"id":"b108","word":"قَبْل","wordEn":"Qabl"}],qbl
[{"id":"b109","word":"جَنَاح","wordEn":"Janaah"}],jnH
[{"id":"b109","word":"عِطْف","wordEn":"Etf"}],ETf
[{"id":"b110","word":"بَلَغَ","wordEn":"Balagha"}],blg
[{"id":"b110","word":"أَصَابَ","wordEn":"Asaaba"}],Swb
[{"id":"b110","word":"أَفْضَى","wordEn":"Af’daa"}],fDw
[{"id":"b110","word":"وَرَدَ","wordEn":"Warada"}],wrd
[{"id":"b111","word":"أَوْرَدَ","wordEn":"Aw’rada"}],wrd
[{"id":"b112","word":"خَرَقَ","wordEn":"Kharaqa"}],xrq
[{"id":"b112","word":"فَطَرَ","wordEn":"Fatara"},{"id":"b134","word":"فَطَرَ","wordEn":"Fatara"}],fTr
[{"id":"b112","word":"فَجَرَ","wordEn":"Fajara"},{"id":"n7","word":"فَجَرَ","wordEn":"Fajara"}],fjr
[{"id":"b112","word":"فَلَقَ","wordEn":"Falaqa"}],flq
[{"id":"b114","word":"طَافَ","wordEn":"Taafa"}],Twf
[{"id":"b114","word":"حَارَ","wordEn":"Haara"}],Hrb
[{"id":"b114","word":"نَكَصَ","wordEn":"Nakasa"}],nkS
[{"id":"b114","word":"أَدْبَرَ","wordEn":"Ad’bara"}],dbr
[{"id":"b115","word":"صَرَفَ","wordEn":"Sarafa"}],Srf
[{"id":"b117","word":"جَنَى","wordEn":"Janaa"}],jny
[{"id":"b119","word":"نَفَخَ","wordEn":"Nafakha"}],nfx
[{"id":"b119","word":"أَطْفَأَ","wordEn":"At’fa’aa"}],TfA
[{"id":"b120","word":"ذَرَأَ","wordEn":"Thara’aa"},{"id":"b134","word":"ذَرَأَ","wordEn":"Tha’ra’aa"}],*rA
[{"id":"b120","word":"بَسَطَ","wordEn":"Basata"},{"id":"k40","word":"بَسَطَ","wordEn":"Basata"}],bsT
[{"id":"b121","word":"نَبَذَ","wordEn":"Nabatha"},{"id":"dd1","wordEn":"Nabatha","word":"نَبَذَ","root":"nb*"}],nb*
[{"id":"b121","word":"قَذَفَ","wordEn":"Qathaf"},{"id":"dd1","wordEn":"Qathafa","word":"قَذَفَ","root":"q*f"}],q*f
[{"id":"b122","word":"وِرْد","wordEn":"Wird"},{"id":"k66","word":"وِرْد","wordEn":"Wird"}],wrd
[{"id":"AA48","word":"هِيم","wordEn":"Jamal"},{"id":"b122","word":"هِيم","wordEn":"Heem"}],-,bhm,hym
[{"id":"b123","word":"أَكْوَاب","wordEn":"Ak’waab"}],kwb
[{"id":"b123","word":"سِقَايَة","wordEn":"Siqaayah"}],sqy
[{"id":"b124","word":"غِسْلِين","wordEn":"Ghis’leen"}],gsl
[{"id":"b90","word":"خَلْف","wordEn":"Khalf"},{"id":"b127","word":"خَلْف","wordEn":"Khalf"}],xlf
[{"id":"b130","word":"تَأَخَّرَ","wordEn":"Ta’akh’khara"}],Axr
[{"id":"b130","word":"غَبَرَ","wordEn":"Ghabara"}],gbr
[{"id":"b132","word":"أَتْبَعَ","wordEn":"At’ba’aa"}],tbE
[{"id":"b112","word":"فَطَرَ","wordEn":"Fatara"},{"id":"b134","word":"فَطَرَ","wordEn":"Fatara"}],fTr
[{"id":"b134","word":"خَلَقَ","wordEn":"Khalaqa"}],xlq
[{"id":"b120","word":"ذَرَأَ","wordEn":"Thara’aa"},{"id":"b134","word":"ذَرَأَ","wordEn":"Tha’ra’aa"}],*rA
[{"id":"b135","word":"عَرَضَ","wordEn":"A’rada"}],ErD
[{"id":"b136","word":"جَبِين","wordEn":"Jabeen"}],jbn
[{"id":"b136","word":"نَاصِيَة","wordEn":"Naasiyah"}],nSy
[{"id":"b137","word":"رَسُول","wordEn":"Rasool"}],rsl
[{"id":"b138","word":"كَاهِن","wordEn":"Kaahin"}],khn
[{"id":"b138","word":"شَاعِر","wordEn":"Shaa’er"}],$Er
[{"id":"b138","word":"مَجْنُون","wordEn":"Maj’noon"},{"id":"d36","wordEn":"Majnoon","word":"مَجْنُون","root":"jnn"}],jnn
[{"id":"t1","wordEn":"Jawaari","word":"جَوَارِ"}],jrH
[{"id":"t2","wordEn":"Ass’ass","word":"عَسْعَسَ"}],EsEs
[{"id":"t2","wordEn":"Waqab","word":"وَقَبَ"}],wqb
[{"id":"t2","wordEn":"Az’lam","word":"أَظْلَمَ"}],Zlm
[{"id":"t3","wordEn":"Taree","word":"طَرِي"}],Trq,Trw,qmTr
[{"id":"t3","wordEn":"Ratb","word":"رَطْب"},{"id":"k37","word":"رَطْب","wordEn":"Ratbb"}],rTb
[{"id":"t4","wordEn":"Kai","word":"كَيْ"}],kyf,kyd,kyl
[{"id":"t5","wordEn":"Qitr","word":"قِطْر"}],qTr
[{"id":"t5","wordEn":"Muhl","word":"مُهْل"}],hlk,mhl
[{"id":"t6","wordEn":"Arsh","word":"عَرْش"}],Er$
[{"id":"t7","wordEn":"Zubar","word":"زُبَر"}],zbr
[{"id":"t8","wordEn":"Makara","word":"مَكَرَ"}],mkr
[{"id":"t9","wordEn":"Meezaan","word":"مِيزَان"}],wzn
[{"id":"t9","wordEn":"Qiss’taass","word":"قِسْطَاس"}],qsTs
[{"id":"t10","wordEn":"Jaaba","word":"جَابَ"}],jwb
[{"id":"t11","wordEn":"Qadb","word":"قَضْب"}],qDb
[{"id":"t11","wordEn":"Baql","word":"بَقْل"}],bql
[{"id":"t15","wordEn":"Shakara","word":"شَكَرَ"}],$kr
[{"id":"t17","wordEn":"Elaa","word":"إِلَى"}],-
[{"id":"t18","wordEn":"Darr","word":"ضَرّ"}],Drr,DrE,xDr
[{"id":"t18","wordEn":"Durr","word":"ضُرّ"}],Drr
[{"id":"t20","wordEn":"Afaaqa","word":"أَفَاقَ"}],fwq
[{"id":"t21","wordEn":"Faqr","word":"فَقْر"}],fqr
[{"id":"t21","wordEn":"Mas’kanah","word":"مَسْكَنَة"}],skn
[{"id":"t21","wordEn":"Aylah","word":"عَيْلَة"}],Eyl
[{"id":"t21","wordEn":"Qatar","word":"قَتَر"}],qtr
[{"id":"t21","wordEn":"Mat’rabah","word":"مَتْرَبَة"}],trb
[{"id":"t22","wordEn":"Osr","word":"عُسْر"}],Esr
[{"id":"t22","wordEn":"Haraj","word":"حَرَج"}],Hrj
[{"id":"t22","wordEn":"Dayq","word":"ضَيْق"}],Dyq
[{"id":"t22","wordEn":"Haajah","word":"حَاجَة"}],Hwj
[{"id":"t23","wordEn":"Daaqa","word":"ضَاقَ"}],Dyq
[{"id":"t23","wordEn":"Qadara","word":"قَدَرَ"},{"id":"q1","word":"قَدَرَ","wordEn":"Qadara"}],qdr
[{"id":"t23","wordEn":"Hasira","word":"حَصِرَ"}],HSr
[{"id":"t24","wordEn":"Naqada","word":"نَقَضَ"},{"id":"q12","word":"نَقَضَ","wordEn":"Naqada"}],nqD
[{"id":"t26","wordEn":"Kisaf","word":"كِسَف"}],ksf
[{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}],skn
[{"id":"t28","wordEn":"Sakata","word":"سَكَتَ"}],skt
[{"id":"t29","wordEn":"Qaleel","word":"قَلِيل"}],qll
[{"id":"t29","wordEn":"Fateel","word":"فَتِيل"}],ftl
[{"id":"t29","wordEn":"Naqeer","word":"نَقِير"}],nqr
[{"id":"t29","wordEn":"Qit’meer","word":"قِطْمِير"}],qTmr
[{"id":"t29","wordEn":"Fawaaq","word":"فَوَاق"}],fwq
[{"id":"t34","wordEn":"Abasa","word":"عَبَسَ"}],Ebs
[{"id":"t34","wordEn":"Basara","word":"بَسَرَ"}],bsr
[{"id":"tt1","wordEn":"Juz’a","word":"جُزْء"}],jzA
[{"id":"tt1","wordEn":"Buq’ah","word":"بُقْعَة"}],bqE
[{"id":"tt1","wordEn":"E’deen","word":"عِضِين"}],EDw
[{"id":"tt1","wordEn":"Firq","word":"فِرْق"}],frq
[{"id":"A1","word":"سَكَنَ","wordEn":"Sakana","root":"skn","$$hashKey":"00T"},{"id":"A5","word":"سَكَنَ","wordEn":"Sakana"},{"id":"t28","wordEn":"Sakana","word":"سَكَنَ"},{"id":"tt4","wordEn":"Sakana","word":"سَكَنَ"}],skn
[{"id":"tt5","wordEn":"Labitha","word":"لَبِثَ"}],lbv
[{"id":"tt5","wordEn":"Makatha","word":"مَكَثَ"}],mkv
[{"id":"tt6","wordEn":"Rab’wah","word":"رَبْوَة"}],rbw
[{"id":"tt6","wordEn":"Amt","word":"أَمْت"}],Amt
[{"id":"tt6","wordEn":"Ree’a","word":"رِيع"}],srE,$rE,DrE,ryE
[{"id":"tt6","wordEn":"Ah’qaaf","word":"أَحْقَاف"}],Hqf
[{"id":"tt6","wordEn":"Ewaj","word":"عِوَج"}],Ewj
[{"id":"tt6","wordEn":"Zaygh","word":"زَيْغ"}],zyg
[{"id":"tt7","wordEn":"Jaara","word":"جَارَ"}],Hjr,jwr
[{"id":"d1","wordEn":"Salaka","word":"سَلَك","root":"slk"}],slk
[{"id":"d4","wordEn":"E’jaaf","word":"عِجَاف","root":"Ejf"}],Ejf
[{"id":"AA48","word":"ضَامِر","wordEn":"Naaqah"},{"id":"d4","wordEn":"Daamir","word":"ضَامِر","root":"Dmr"}],Dmr
[{"id":"d7","wordEn":"Athal","word":"أَثْل","root":"Avl"}],Avl
[{"id":"d7","wordEn":"Yaq’teen","word":"يَقْطِين","root":"qTn"}],-
[{"id":"d7","wordEn":"Daree’e","word":"ضَرِيع","root":"DrE"}],DrE
[{"id":"d8","wordEn":"Sawaab","word":"صَوَاب","root":"Swb"}],Swb
[{"id":"d8","wordEn":"Haqq","word":"حَقّ","root":"Hqq"}],Hqq
[{"id":"d9","wordEn":"Asslaha","word":"أَصْلَحَ","root":"SlH"}],SlH
[{"id":"d10","wordEn":"Bayn","word":"بَيْن","root":"byn"}],byn,dAb,kEb
[{"id":"d10","wordEn":"Wasat","word":"وَسَط","root":"wsT"}],wsT
[{"id":"AA25","word":"قَصْد","wordEn":"Qassd"},{"id":"d10","wordEn":"Qassd","word":"قَصْد","root":"qsd"}],qSd
[{"id":"d11","wordEn":"Shaani’e","word":"شَانِئ","root":"$nA"}],$nA
[{"id":"b98","word":"دَعَا","wordEn":"Da’aa"},{"id":"d12","wordEn":"Da’aa","word":"دَعَا","root":"dEw"}],dEw
[{"id":"d13","wordEn":"Qalb","word":"قَلْب","root":"qlb"}],qlb
[{"id":"d13","wordEn":"Fu’aad","word":"فُؤَاد","root":"fAd"}],fAd
[{"id":"d13","wordEn":"Sadrr","word":"صَدْر","root":"Sdr"}],Sdr
[{"id":"d13","wordEn":"Nafss","word":"نَفْس","root":"nfs"}],nfs
[{"id":"d14","wordEn":"Wass’waass","word":"وَسْوَاس","root":"wsws"}],wsws
[{"id":"d15","wordEn":"Daleel","word":"دَلِيل","root":"dll"}],dll
[{"id":"d16","wordEn":"Nahaar","word":"نَهَار","root":"nhr"}],nhr
[{"id":"d16","wordEn":"Yawm","word":"يَوْم","root":"ywm"}],ywm,-
[{"id":"d17","wordEn":"Ad’naa","word":"أَدْنَى","root":"Adn"}],dnw
[{"id":"d17","wordEn":"Aa’jilah","word":"عَاجِلَة","root":"Ejl"}],Ejl
[{"id":"d18","wordEn":"Ba’eed","word":"بَعِيد","root":"bEd"}],bEd
[{"id":"d18","wordEn":"Saheeq","word":"سَحِيق","root":"sHq"}],sHq
[{"id":"d18","wordEn":"A’meeq","word":"عَمِيق","root":"Emq"},{"id":"k65","word":"عَمِيق","wordEn":"Ameeq"}],Emq
[{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}],qDy
[{"id":"d20","wordEn":"Sa’aa","word":"سَعَى","root":"sEy"}],sEy
[{"id":"d22","wordEn":"Jaheem","word":"جَحِيم","root":"jHm"}],jHm
[{"id":"d22","wordEn":"Saqarr","word":"سَقَر","root":"sqr"},{"id":"k51","word":"سَقَر","wordEn":"Saqar"}],-
[{"id":"d22","wordEn":"Sa’eer","word":"سَعِير","root":"sEr"}],sEr
[{"id":"d22","wordEn":"Haawiyah","word":"هَاوِيَة","root":"hwy"}],hwy
[{"id":"d22","wordEn":"Ghayy","word":"غَيّ","root":"gwy"}],gyr,gwy,gyZ
[{"id":"d22","wordEn":"Hutamah","word":"حُطَمَة","root":"HTm"}],HTm
[{"id":"d24","wordEn":"Qareen","word":"قَرِين","root":"qrn"},{"id":"h10","word":"قَرِين","wordEn":"Qareen"}],qrn
[{"id":"d24","wordEn":"Rafeeq","word":"رَفِيق","root":"rfq"}],rfq
[{"id":"d24","wordEn":"Khaleel","word":"خَلِيل","root":"xll"}],xll
[{"id":"b85","word":"حَمِيم","wordEn":"Hameem"},{"id":"d24","wordEn":"Hameem","word":"حَمِيم","root":"Hmm"}],Hmm
[{"id":"d24","wordEn":"Waleejah","word":"وَلِيجَة","root":"wlj"}],wlj
[{"id":"d24","wordEn":"Bitaanah","word":"بِطَانَة","root":"bTn"}],bTn
[{"id":"d24","wordEn":"Khathool","word":"خَذُول","root":"x*l"}],x*l
[{"id":"d24","wordEn":"Akh’daan","word":"أَخْدَان","root":"xdn"}],xdn
[{"id":"d27","wordEn":"Dukh’khaan","word":"دُخَان","root":"dxn"}],dxn
[{"id":"d27","wordEn":"Nuhaass","word":"نُحَاس","root":"nHs"}],nHs
[{"id":"d27","wordEn":"Yah’moom","word":"يَحْمُوم","root":"Hmm"}],Hmm
[{"id":"d28","wordEn":"Shamss","word":"شَمْس","root":"$ms"}],$ms
[{"id":"d28","wordEn":"Haroor","word":"حَرُور","root":"Hrr"}],Hrr
[{"id":"d29","wordEn":"Raagha","word":"رَاغَ","root":"rwg"}],rwg
[],Ans
[{"id":"d31","wordEn":"Zaagha","word":"زَاغَ","root":"zAg"}],zyg
[{"id":"d31","wordEn":"Bariqa","word":"بَرِقَ","root":"brq"}],brq
[{"id":"d32","wordEn":"Tabarraj","word":"تَبَرَّج","root":"brj"}],brj
[{"id":"d33","wordEn":"Sahree’ah","word":"شَرِيعَة","root":"$rE"},{"id":"T3","word":"شَرِيعَة","wordEn":"Sharee’ah"}],$rE
[{"id":"A25","word":"أَتَى","wordEn":"Ataa"},{"id":"d34","wordEn":"Ataa","word":"أَتَى","root":"Aty"}],Aty
[{"id":"d34","wordEn":"A’ataa","word":"أَعْطَى","root":"ETw"}],ETw
[{"id":"d34","wordEn":"Deeyah","word":"دِيَة","root":"wdy"}],wdy,Sdy
[{"id":"d34","wordEn":"Wahaba","word":"وَهَبَ","root":"whb"}],whb
[{"id":"t17","wordEn":"Elaa","word":"إِلَى"}],-
[{"id":"d35","wordEn":"Jidaar","word":"جِدَار","root":"jdr"}],jdr
[{"id":"d35","wordEn":"Sadd","word":"سَدّ","root":"sdd"}],sdd
[{"id":"d35","wordEn":"Radm","word":"رَدْم","root":"rdm"}],rdm
[{"id":"d35","wordEn":"Soor","word":"سُور","root":"swr"}],swr,Hsr,ysr
[{"id":"b138","word":"مَجْنُون","wordEn":"Maj’noon"},{"id":"d36","wordEn":"Majnoon","word":"مَجْنُون","root":"jnn"}],jnn
[{"id":"d36","wordEn":"Maftoon","word":"مَفْتُون","root":"ftn"}],ftn
[{"id":"d36","wordEn":"Su’or","word":"سُعُر","root":"sEr"}],sEr
[{"id":"dd1","wordEn":"Alqaa","word":"أَلْقَى","root":"lqy"}],lqy
[{"id":"dd1","wordEn":"Salaka","word":"سَلَكَ","root":"slk"}],slk
[{"id":"b121","word":"نَبَذَ","wordEn":"Nabatha"},{"id":"dd1","wordEn":"Nabatha","word":"نَبَذَ","root":"nb*"}],nb*
[{"id":"b121","word":"قَذَفَ","wordEn":"Qathaf"},{"id":"dd1","wordEn":"Qathafa","word":"قَذَفَ","root":"q*f"}],q*f
[{"id":"dd3","wordEn":"Khaafa","word":"خَافَ","root":"xwf"}],xwf
[{"id":"dd3","wordEn":"Khasha’aa","word":"خَشَعَ","root":"x$E"},{"id":"n31","word":"خَشَعَ","wordEn":"Khasha’aa"},{"id":"E2","word":"خَشَعَ","wordEn":"Khasha’aa"}],x$E
[{"id":"A24","word":"حِذْر","wordEn":"Hithir"},{"id":"dd3","wordEn":"Hithrr","word":"حِذْر","root":"H*r"}],H*r
[{"id":"dd3","wordEn":"Awjasa","word":"أَوْجَسَ","root":"wjs"}],wjs
[{"id":"dd5","wordEn":"Dal’oo","word":"دَلْو","root":"dlw"}],dlw
[{"id":"dd5","wordEn":"Thanoob","word":"ذَنُوب","root":"*nb"}],*nb
[{"id":"dd6","wordEn":"Ur’dah","word":"عُرْضَة","root":"ErD"}],ErD
[{"id":"dd8","wordEn":"Zaala","word":"زَال","root":"zwl"}],zlzl,zyl,zwl
[{"id":"dd9","wordEn":"Buothira","word":"بُعْثِرَ","root":"bEv"}],bEvr
[{"id":"y2","word":"حَفِظَ","wordEn":"Hafiza"}],HfZ
[{"id":"w1","word":"جَمّ","wordEn":"Jamm"}],jmm
[{"id":"w1","word":"رَغَد","wordEn":"Raghad"}],rgd
[{"id":"w1","word":"غَدَق","wordEn":"Ghadaq"}],gdq
[{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}],Ahl,hlk
[{"id":"w4","word":"أَجَل","wordEn":"Ajal"}],Ajl
[{"id":"h1","word":"يَمِين","wordEn":"Yameen"},{"id":"l15","word":"يَمِين","wordEn":"Yameen"},{"id":"q11","word":"يَمِين","wordEn":"Yameen"}],ymn
[{"id":"h1","word":"ذِرَاع","wordEn":"Thiraa’a"}],*rE
[{"id":"h2","word":"بَلَى","wordEn":"Balaa"},{"id":"n28","word":"بَلَى","wordEn":"Balaa"}],-
[{"id":"b45","word":"رَفَعَ","wordEn":"Rafa’aa"},{"id":"h4","word":"رَفَعَ","wordEn":"Rafa’aa"}],rfE
[{"id":"h7","word":"بَادَ","wordEn":"Baada"}],Ebd
[{"id":"h7","word":"دَمْدَمَ","wordEn":"Damdama"}],dmdm
[{"id":"h7","word":"بَارَ","wordEn":"Baara"}],brk
[{"id":"h8","word":"خَفّ","wordEn":"Khaffa"}],xff
[{"id":"d24","wordEn":"Qareen","word":"قَرِين","root":"qrn"},{"id":"h10","word":"قَرِين","wordEn":"Qareen"}],qrn
[{"id":"h10","word":"أَتْرَاب","wordEn":"Atraab"}],trb
[{"id":"h10","word":"سَمِيّ","wordEn":"Sameey"}],smw
[{"id":"h10","word":"صَفّ","wordEn":"Saff"}],Sfw,Sff
[{"id":"h11","word":"فَشِل","wordEn":"Fashil"}],f$l
[{"id":"h13","word":"سَرْمَد","wordEn":"Sarrmad"}],srmd
[{"id":"h13","word":"أَبَد","wordEn":"Abad"}],Abd
[{"id":"h14","word":"دَامَ","wordEn":"Daama"}],ndm
[{"id":"h14","word":"زَالَ","wordEn":"Zaala"}],zyl,zwl
[{"id":"h14","word":"أَبْرَحَ","wordEn":"Abraha"}],brH
[{"id":"h15","word":"ضَحِكَ","wordEn":"Dahika"}],DHk
[{"id":"h16","word":"عَاصِف","wordEn":"Aaasif"}],ESf
[{"id":"h16","word":"قَاصِف","wordEn":"Qaasif"}],qSf
[{"id":"h16","word":"حَاصِب","wordEn":"Haasib"},{"id":"E7","word":"حَاصِب","wordEn":"Haasib"}],HSb
[{"id":"h16","word":"سَمُوم","wordEn":"Samoom"},{"id":"k51","word":"سَمُوم","wordEn":"Samoom"}],smm
[{"id":"h16","word":"إِعْصَار","wordEn":"Eesaar"}],ESr
[{"id":"h16","word":"حُسْبَان","wordEn":"Hussbaan"},{"id":"E7","word":"حُسْبَان","wordEn":"Husbaan"}],Hsb
[{"id":"h16","word":"نَفْحَة","wordEn":"Nafhah"}],nfH
[{"id":"h16","word":"صَرْصَر","wordEn":"Sarsar"}],SrSr
[],Eqm
[{"id":"h17","word":"كَان","wordEn":"Kaana"}],kwn,kyn
[{"id":"h17","word":"أَصْبَحَ","wordEn":"Assbaha"}],SbH
[{"id":"h17","word":"وَقَعَ","wordEn":"Waqa’aa"},{"id":"k53","word":"وَقَعَ","wordEn":"Waqa’aa"}],wqE
[{"id":"n2","word":"رِجْس","wordEn":"Rijss"},{"id":"k62","word":"رِجْس","wordEn":"Rijss"}],rjs
[{"id":"n2","word":"خَبِيث","wordEn":"Khabeeth"}],xbv
[{"id":"n3","word":"مَكْرُوه","wordEn":"Makrooh"}],krh
[{"id":"n3","word":"إِدّ","wordEn":"Edd"}],Add
[{"id":"n3","word":"إِمْر","wordEn":"Emrr"}],Amr
[{"id":"n3","word":"أُفّ","wordEn":"Off"}],Aff
[{"id":"n4","word":"جَاهِل","wordEn":"Jaahil"}],jhl
[{"id":"n5","word":"غِلّ","wordEn":"Ghill"}],gll
[{"id":"n6","word":"كَفُور","wordEn":"Kafoor"}],kfr
[{"id":"n6","word":"كَنُود","wordEn":"Kanood"}],knd
[{"id":"n7","word":"فَسَقَ","wordEn":"Fasaqa"}],fsq
[{"id":"b112","word":"فَجَرَ","wordEn":"Fajara"},{"id":"n7","word":"فَجَرَ","wordEn":"Fajara"}],fjr
[{"id":"n8","word":"خُرْطُوم","wordEn":"Kharrtoom"}],xrTm
[{"id":"n10","word":"نَحْس","wordEn":"Nahss"}],nHs
[{"id":"b24","word":"حُسُوم","wordEn":"Hosoom"},{"id":"n10","word":"حُسُوم","wordEn":"Husoom"},{"id":"l12","word":"حُسُوم","wordEn":"Hussom"}],Hsm
[{"id":"n11","word":"فَازَ","wordEn":"Faaza"},{"id":"k7","word":"فَازَ","wordEn":"Faaza"}],fwz
[{"id":"n12","word":"قُرْبَان","wordEn":"Qurbaan"}],qrb
[{"id":"n14","word":"كَادَ","wordEn":"Kaada"}],kwd
[{"id":"n14","word":"أَزِفَ","wordEn":"Aziff"}],Azf
[{"id":"n15","word":"أَثَر","wordEn":"Athar"},{"id":"q7","word":"أَثَر","wordEn":"Athar"}],Avr
[],Ayy,sqy
[{"id":"n15","word":"مُبْصِرَة","wordEn":"Mubsirah"}],bSr
[{"id":"n17","word":"ذَكَرَ","wordEn":"Thakara"}],*kr
[{"id":"n18","word":"نِعْمَة","wordEn":"Niemah"}],nEm
[{"id":"AA14","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n19","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n34","word":"أَنْعَمَ","wordEn":"An’ama"}],nEm
[{"id":"n19","word":"أَغْنَى","wordEn":"Aghnaa"},{"id":"k5","word":"أَغْنَى","wordEn":"Agh’naa"}],gny
[{"id":"n19","word":"أَقْنَى","wordEn":"Aqnaa"}],qny
[{"id":"n20","word":"خَسِرَ","wordEn":"Khasira"},{"id":"k20","word":"خَسِرَ","wordEn":"Khasira"}],xsr
[{"id":"n22","word":"خَرَجَ","wordEn":"Kharaja"}],xrj
[{"id":"n22","word":"بَرَزَ","wordEn":"Baraza"}],brz
[{"id":"n22","word":"نَفَرَ","wordEn":"Nafara"}],nfr
[{"id":"b59","word":"زَهَقَ","wordEn":"Zahaqa"},{"id":"n22","word":"زَهَقَ","wordEn":"Zahaqa"}],zhq
[{"id":"n22","word":"طَلَعَ","wordEn":"Tala’aa"}],TlE
[{"id":"n23","word":"أَخْرَجَ","wordEn":"Akhraja"}],xrj
[{"id":"n24","word":"طَرْف","wordEn":"Tarrff"},{"id":"k24","word":"طَرْف","wordEn":"Tarff"}],Trf
[{"id":"n24","word":"بَصَر","wordEn":"Basar"}],bSr
[{"id":"n25","word":"رَقِيب","wordEn":"Raqeeb"}],rqb
[{"id":"n25","word":"حَرَس","wordEn":"Harass"}],Hrs
[{"id":"n25","word":"مُهَيْمِن","wordEn":"Muhaymin"}],hmn
[{"id":"n28","word":"لَمْ","wordEn":"Lam"}],lmH
[{"id":"h2","word":"بَلَى","wordEn":"Balaa"},{"id":"n28","word":"بَلَى","wordEn":"Balaa"}],-
[{"id":"n28","word":"لَاتَ","wordEn":"Laata"}],lwt
[{"id":"n30","word":"تَحْت","wordEn":"That"}],tHt
[{"id":"n30","word":"أَسْفَل","wordEn":"Assfal"}],sfl
[{"id":"n30","word":"سَافِل","wordEn":"Saafil"}],sfl
[{"id":"dd3","wordEn":"Khasha’aa","word":"خَشَعَ","root":"x$E"},{"id":"n31","word":"خَشَعَ","wordEn":"Khasha’aa"},{"id":"E2","word":"خَشَعَ","wordEn":"Khasha’aa"}],x$E
[{"id":"n32","word":"سَعِيد","wordEn":"Saeed"}],sEd
[{"id":"n33","word":"بِرّ","wordEn":"Berr"}],brr
[{"id":"AA14","word":"أَحْسَنَ","wordEn":"Ahsana"},{"id":"n34","word":"أَحْسَنَ","wordEn":"Ah’sana"}],Hsn
[{"id":"AA14","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n19","word":"أَنْعَمَ","wordEn":"An’ama"},{"id":"n34","word":"أَنْعَمَ","wordEn":"An’ama"}],nEm
[{"id":"b66","word":"ضَرَبَ","wordEn":"Daraba"},{"id":"m1","word":"ضَرَبَ","wordEn":"Daraba"}],Drb
[{"id":"m1","word":"وَكَزَ","wordEn":"Wakaza"}],wkz
[{"id":"m3","word":"رِزْق","wordEn":"Rizzq"}],rzq
[{"id":"AA12","word":"خَيْر","wordEn":"Khayr"},{"id":"m3","word":"خَيْر","wordEn":"Khayr"}],xyr
[{"id":"m3","word":"مَغَانِم","wordEn":"Maghaanim"}],gnm
[{"id":"m4","word":"رَبّ","wordEn":"Rabb"}],rbb,rbS,rbw
[{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}],Ahl,hlk
[{"id":"m5","word":"أُمْ","wordEn":"Umm"}],mny,mTr
[{"id":"b102","word":"سَأَلَ","wordEn":"Sa’a’la"},{"id":"m6","word":"سَأَلَ","wordEn":"Sa’ala"}],sAl
[{"id":"m8","word":"تُرَاب","wordEn":"Turaab"}],trb
[{"id":"m8","word":"طِين","wordEn":"Teen"}],-,qsT,Tyn,qnT
[{"id":"m8","word":"صَعِيد","wordEn":"Saeed"}],SEd
[{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}],qDy
[{"id":"m10","word":"نَادِي","wordEn":"Naadee"}],ndw
[{"id":"m12","word":"شَغَفَ","wordEn":"Shaghafa"}],$gf
[{"id":"m13","word":"قَصْر","wordEn":"Qassrr"}],qSr
[{"id":"m13","word":"صَرْح","wordEn":"Sarrh"}],SrH
[{"id":"m14","word":"عَمِلَ","wordEn":"Amela"},{"id":"k21","word":"عَمِلَ","wordEn":"Amela"}],Eml
[{"id":"m14","word":"شِقّ","wordEn":"Shiqq"}],$qq
[{"id":"m17","word":"أَمَد","wordEn":"Amad"}],mdd,Amd
[{"id":"m17","word":"مَهْل","wordEn":"Mahl"}],hlk
[{"id":"m17","word":"عُمْر","wordEn":"Omur"}],Emr
[{"id":"m18","word":"أَمَدّ","wordEn":"Amadd"}],mdd
[{"id":"m19","word":"نَاصِر","wordEn":"Naasir"}],nSr
[{"id":"m19","word":"حَوَارِي","wordEn":"Hawareey"}],Hwr
[{"id":"m19","word":"شَهِيد","wordEn":"Shaheed"}],$hd
[{"id":"m19","word":"ظَهِير","wordEn":"Zaheer"}],Zhr
[{"id":"m19","word":"وَزِير","wordEn":"Wazeer"}],wzr
[{"id":"m19","word":"عَضُد","wordEn":"Adud"}],EDd
[{"id":"m21","word":"رَجُل","wordEn":"Rajul"}],rjl
[{"id":"m22","word":"طَعْم","wordEn":"Ta’am"}],TEm
[{"id":"m22","word":"لَذَّة","wordEn":"Lath’thah"}],l**
[{"id":"m23","word":"زُخْرُف","wordEn":"Zakh’rafa"}],zxrf
[],-,sbl
[{"id":"m24","word":"مُقْوِين","wordEn":"Muqween"}],qwy
[{"id":"m27","word":"شَغَلَ","wordEn":"Shaghala"}],$gl
[{"id":"b55","word":"أَفَاضَ","wordEn":"Afaad"},{"id":"m27","word":"أَفَاضَ","wordEn":"Afaada"}],fyD
[{"id":"m28","word":"أَعْنَتَ","wordEn":"A’anata"}],Ent
[{"id":"m31","word":"ثَابِت","wordEn":"Thaabit"}],vbt
[{"id":"m31","word":"مَتِين","wordEn":"Mateen"}],mtn
[{"id":"m31","word":"قَيِّمَة","wordEn":"Qayyimah"}],qwm
[{"id":"m31","word":"وُثْقَى","wordEn":"Wuth’qaa"}],wvq
[{"id":"m32","word":"أَتْقَنَ","wordEn":"Atqana"}],tqn
[{"id":"b41","word":"عَفَا","wordEn":"Afaa"},{"id":"m33","word":"عَفَا","wordEn":"Afaa"}],Efw
[{"id":"m33","word":"غَفَرَ","wordEn":"Ghafara"}],gfr
[{"id":"m36","word":"وُجْد","wordEn":"Wujd"}],wjd
[{"id":"m36","word":"سَعَة","wordEn":"Sa’ah"},{"id":"f3","word":"سَعَة","wordEn":"Sa’ah"}],wsE
[{"id":"m36","word":"قَدَر","wordEn":"Qadarr"}],qdr
[{"id":"m37","word":"فَرَضَ","wordEn":"Farada"}],frD
[{"id":"m38","word":"ذُبَاب","wordEn":"Thubaab"}],*bb
[{"id":"m40","word":"مَرَجَ","wordEn":"Maraja"}],mrj
[{"id":"m41","word":"أَعْرَضَ","wordEn":"A’arada"}],ErD
[{"id":"m41","word":"صَدَفَ","wordEn":"Sadafa"}],Sdf
[{"id":"m44","word":"لَطِيف","wordEn":"Lateef"}],lTf
[{"id":"m44","word":"حَنَان","wordEn":"Hanaan"}],Hnn
[{"id":"m45","word":"طَبَعَ","wordEn":"Taba’aa"}],TbE
[{"id":"m45","word":"خَتَمَ","wordEn":"Khatama"}],xtm
[{"id":"m46","word":"أَمْلَى","wordEn":"Amlaa"}],mlw
[{"id":"m46","word":"نَظِرَة","wordEn":"Nazirah"}],nZr
[{"id":"m47","word":"ضَيْف","wordEn":"Dayf"}],Dyf
[{"id":"m47","word":"وَفْد","wordEn":"Wafd"}],wfd
[{"id":"m49","word":"دُسُر","wordEn":"Dusurr"}],dsr
[{"id":"m49","word":"أَوْتَاد","wordEn":"Awtaad"}],wtd
[{"id":"l1","word":"عَصَا","wordEn":"Asaa"}],ESw,ESy
[{"id":"A25","word":"أَتَى","wordEn":"Ataa"},{"id":"d34","wordEn":"Ataa","word":"أَتَى","root":"Aty"}],Aty
[{"id":"l3","word":"أَوْلَى","wordEn":"Awlaa"}],wly
[{"id":"l6","word":"رَقَبَ","wordEn":"Raqaba"}],rqb
[{"id":"l7","word":"فَوْج","wordEn":"Fawj"}],fwj
[{"id":"l7","word":"حِزْب","wordEn":"Hizb"}],Hzb
[{"id":"l7","word":"نَفِير","wordEn":"Nafeer"}],nfr
[{"id":"l7","word":"فِئَة","wordEn":"Fiah"}],fAy
[{"id":"l7","word":"ثُبَات","wordEn":"Thubaat"}],vby
[{"id":"l8","word":"حَطَب","wordEn":"Hatab"}],HTb
[{"id":"l9","word":"كَتَبَ","wordEn":"Kataba"}],ktb
[{"id":"l11","word":"كَاتِب","wordEn":"Kaatib"}],ktb
[{"id":"l11","word":"سَفَرَة","wordEn":"Safarah"}],sfr
[{"id":"l12","word":"تَتْر","wordEn":"Tatrr"}],wtr
[],-
[{"id":"b24","word":"حُسُوم","wordEn":"Hosoom"},{"id":"n10","word":"حُسُوم","wordEn":"Husoom"},{"id":"l12","word":"حُسُوم","wordEn":"Hussom"}],Hsm
[{"id":"l12","word":"رَدِف","wordEn":"Radif"}],rdf
[{"id":"l12","word":"دَأْب","wordEn":"Da’ab"}],dAb
[{"id":"l12","word":"مُتَتَابِع","wordEn":"Mutataabea"}],tbE
[{"id":"l13","word":"رَجَعَ","wordEn":"Raja’aa"}],rjE
[{"id":"l13","word":"تَابَ","wordEn":"Taaba"}],ryb,twb
[{"id":"l13","word":"أَنَابَ","wordEn":"Anaaba"}],nwb
[{"id":"l15","word":"عَبْد","wordEn":"Abd"}],Ebd
[{"id":"l15","word":"أَمَة","wordEn":"Amah"}],Amw
[{"id":"l15","word":"رَقَبَة","wordEn":"Raqabah"}],rqb
[{"id":"l15","word":"مُلْك","wordEn":"Mulk"}],mlk
[{"id":"h1","word":"يَمِين","wordEn":"Yameen"},{"id":"l15","word":"يَمِين","wordEn":"Yameen"},{"id":"q11","word":"يَمِين","wordEn":"Yameen"}],ymn
[{"id":"b99","word":"أَخَذَ","wordEn":"Akhatha"},{"id":"l16","word":"أَخَذَ","wordEn":"Akhatha"}],Ax*
[{"id":"k1","word":"عَقَرَ","wordEn":"Aqara"}],Eqr
[{"id":"k3","word":"رَقّ","wordEn":"Raqq"}],rqb,rqq
[{"id":"k3","word":"قِرْطَاس","wordEn":"Qirtaass"}],qrTs
[{"id":"k4","word":"كَفَى","wordEn":"Kafaa"}],kfy
[{"id":"k4","word":"حَسْب","wordEn":"Hassb"}],Hsb
[{"id":"b30","word":"جَزَى","wordEn":"Jazaa"},{"id":"k5","word":"جَزَى","wordEn":"Jazaa"}],jzy
[{"id":"n19","word":"أَغْنَى","wordEn":"Aghnaa"},{"id":"k5","word":"أَغْنَى","wordEn":"Agh’naa"}],gny
[{"id":"k6","word":"أَمْر","wordEn":"Amr"}],Amr
[{"id":"k6","word":"شَأْن","wordEn":"Sha’an"}],$An
[{"id":"k7","word":"أَفْلَحَ","wordEn":"Aflaha"}],flH
[{"id":"n11","word":"فَازَ","wordEn":"Faaza"},{"id":"k7","word":"فَازَ","wordEn":"Faaza"}],fwz
[{"id":"k8","word":"أُذُن","wordEn":"Othun"}],A*n
[{"id":"k8","word":"سَمْع","wordEn":"Sam’e"}],smE
[{"id":"k9","word":"زَلْزَلَ","wordEn":"Zal’zala"}],zlzl
[{"id":"k9","word":"مَارَ","wordEn":"Maara"}],Emr,mry
[{"id":"AA37","word":"مَتَى","wordEn":"Mataa"},{"id":"k10","word":"مَتَى","wordEn":"Mataa"}],-
[{"id":"k11","word":"أَسْفَار","wordEn":"Assfaar"}],sfr
[{"id":"k11","word":"زُبُر","wordEn":"Zubur"}],zbr
[{"id":"AA26","word":"صُحُف","wordEn":"Suhuff"},{"id":"k11","word":"صُحُف","wordEn":"Suhuff"}],SHf
[{"id":"k13","word":"كَأَيّ","wordEn":"Ka’ayy"}],-
[{"id":"k15","word":"أَمَرّ","wordEn":"Amarr"}],mrr
[{"id":"k15","word":"خَمْط","wordEn":"Khamt"}],xmT
[{"id":"k17","word":"جَارِيَة","wordEn":"Jaariyah"}],jry
[{"id":"k17","word":"سَفِينَة","wordEn":"Safeenah"}],sfn
[{"id":"k17","word":"فُلْك","wordEn":"Fulk"}],flk
[{"id":"k18","word":"كَعْبَة","wordEn":"Ka’abah"}],kEb
[{"id":"k19","word":"أَمْس","wordEn":"Amss"}],-,msk
[{"id":"b71","word":"ظَلَمَ","wordEn":"Zalama"},{"id":"k20","word":"ظَلَمَ","wordEn":"Zalama"}],Zlm
[{"id":"n20","word":"خَسِرَ","wordEn":"Khasira"},{"id":"k20","word":"خَسِرَ","wordEn":"Khasira"}],xsr
[{"id":"m14","word":"عَمِلَ","wordEn":"Amela"},{"id":"k21","word":"عَمِلَ","wordEn":"Amela"}],Eml
[{"id":"k22","word":"غُرْفَة","wordEn":"Ghur’fah"}],grf
[{"id":"k23","word":"ضَعِيف","wordEn":"Daeef"}],DEf
[{"id":"k23","word":"وَاهِيَة","wordEn":"Waahiyah"}],why
[{"id":"n24","word":"طَرْف","wordEn":"Tarrff"},{"id":"k24","word":"طَرْف","wordEn":"Tarff"}],Trf
[{"id":"k24","word":"حَدّ","wordEn":"Hadd"}],Hdv
[{"id":"k24","word":"حَرْف","wordEn":"Harff"}],Hrf
[{"id":"k24","word":"أُفُق","wordEn":"Ofuqq"}],Afq
[{"id":"k24","word":"أَقْطَار","wordEn":"Aq’taar"}],qTr
[{"id":"k24","word":"شَفَا","wordEn":"Shafaa"}],$fw
[{"id":"k24","word":"مَعْزِل","wordEn":"Ma’azil"}],Ezl
[{"id":"k24","word":"عُدْوَة","wordEn":"Odwah"}],Edw
[{"id":"k24","word":"صَدَف","wordEn":"Sadaff"}],Sdf
[{"id":"k25","word":"بِئْر","wordEn":"Be’er"}],bAr
[{"id":"k25","word":"جُبّ","wordEn":"Jubb"}],jbb
[{"id":"k26","word":"جَلْدَة","wordEn":"Jal’dah"}],jld
[{"id":"k28","word":"أَيّ","wordEn":"Ayy"}],-,Ayd
[{"id":"k29","word":"أَحَد","wordEn":"Ahad"}],AHd
[{"id":"k30","word":"أَنْ","wordEn":"Ann"}],nEm
[{"id":"k34","word":"سَلَخَ","wordEn":"Salakha"},{"id":"k42","word":"سَلَخَ","wordEn":"Salakha"}],slx
[{"id":"k35","word":"أَكَلَ","wordEn":"Akala"}],Akl
[{"id":"k36","word":"أَطْعَمَ","wordEn":"At’ama"}],TEm
[{"id":"k36","word":"رَزَقَ","wordEn":"Razaqa"}],rzq
[{"id":"t3","wordEn":"Ratb","word":"رَطْب"},{"id":"k37","word":"رَطْب","wordEn":"Ratbb"}],rTb
[{"id":"b120","word":"بَسَطَ","wordEn":"Basata"},{"id":"k40","word":"بَسَطَ","wordEn":"Basata"}],bsT
[{"id":"k40","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f2","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f14","word":"فَتَحَ","wordEn":"Fataha"}],ftH
[{"id":"k40","word":"شَرَحَ","wordEn":"Sharaha"}],$rH
[{"id":"k40","word":"كَشَفَ","wordEn":"Kashafa"}],k$f
[{"id":"k41","word":"حَرْث","wordEn":"Harrth"}],Hrv
[{"id":"k41","word":"زَرْع","wordEn":"Zarr’e"}],zrE
[{"id":"k42","word":"مَدَّ","wordEn":"Madda"}],mdd
[{"id":"k34","word":"سَلَخَ","wordEn":"Salakha"},{"id":"k42","word":"سَلَخَ","wordEn":"Salakha"}],slx
[{"id":"k42","word":"نَزَعَ","wordEn":"Naza’aa"}],nzE
[{"id":"k45","word":"كَيْف","wordEn":"Kayf"}],kyf
[{"id":"k46","word":"لِمَ","wordEn":"Lima"}],Elm,Zlm,klm,slm
[{"id":"k46","word":"لَوْلَا","wordEn":"Lawlaa"}],-
[{"id":"k47","word":"أَرْسَى","wordEn":"Arr’saa"}],rsw
[{"id":"k49","word":"عُنُق","wordEn":"Onuq"}],Enq
[{"id":"k49","word":"جِيد","wordEn":"Jeed"}],mjd,jyd
[{"id":"k49","word":"وَتِين","wordEn":"Wateen"}],wtn
[{"id":"k51","word":"حَمّ","wordEn":"Hamm"}],-,Hml
[{"id":"d22","wordEn":"Saqarr","word":"سَقَر","root":"sqr"},{"id":"k51","word":"سَقَر","wordEn":"Saqar"}],-
[{"id":"h16","word":"سَمُوم","wordEn":"Samoom"},{"id":"k51","word":"سَمُوم","wordEn":"Samoom"}],smm
[{"id":"h17","word":"وَقَعَ","wordEn":"Waqa’aa"},{"id":"k53","word":"وَقَعَ","wordEn":"Waqa’aa"}],wqE
[{"id":"k53","word":"هَارَ","wordEn":"Haara"}],hwr
[{"id":"k53","word":"هَوَى","wordEn":"Hawaa"}],hwy
[{"id":"k53","word":"وَجَبَ","wordEn":"Wajaba"}],wjb
[{"id":"k55","word":"حُفْرَة","wordEn":"Hufrah"}],Hfr
[{"id":"k55","word":"أُخْدُود","wordEn":"Okh’dood"}],xdd
[{"id":"k56","word":"سَبَقَ","wordEn":"Sabaqa"}],sbq
[{"id":"k56","word":"خَلَا","wordEn":"Khalaa"}],xlw
[{"id":"k56","word":"سَلَفَ","wordEn":"Salafa"}],slf
[{"id":"k56","word":"مَضَى","wordEn":"Madaa"}],mDy
[{"id":"k57","word":"حُلْقُوم","wordEn":"Hul’qoom"}],Hlq
[{"id":"k57","word":"حَنَاجِر","wordEn":"Hanaajir"}],Hnjr
[{"id":"k58","word":"فَاتَ","wordEn":"Faata"}],fwt
[{"id":"k59","word":"زَعَمَ","wordEn":"Za’ama"}],zEm
[{"id":"k59","word":"حَسِبَ","wordEn":"Hasiba"},{"id":"k63","word":"حَسِبَ","wordEn":"Hasiba"}],Hsb
[{"id":"k60","word":"إِثْم","wordEn":"Ethm"}],Avm
[{"id":"k60","word":"جُنَاح","wordEn":"Junaah"}],jnH
[{"id":"k61","word":"مُجْرِم","wordEn":"Mujrim"}],jrm
[{"id":"k61","word":"فَاسِق","wordEn":"Faasiq"}],fsq
[{"id":"k61","word":"فَاجِر","wordEn":"Faajir"}],fjr
[{"id":"k62","word":"تَفَث","wordEn":"Tafath"}],tfv
[{"id":"n2","word":"رِجْس","wordEn":"Rijss"},{"id":"k62","word":"رِجْس","wordEn":"Rijss"}],rjs
[{"id":"k59","word":"حَسِبَ","wordEn":"Hasiba"},{"id":"k63","word":"حَسِبَ","wordEn":"Hasiba"}],Hsb
[{"id":"k63","word":"أَحْصَى","wordEn":"Ah’saa"}],HSy
[{"id":"k64","word":"مَهْد","wordEn":"Mahd"}],mhd
[{"id":"k64","word":"حُجُور","wordEn":"Hujoor"}],Hjr
[{"id":"d18","wordEn":"A’meeq","word":"عَمِيق","root":"Emq"},{"id":"k65","word":"عَمِيق","wordEn":"Ameeq"}],Emq
[{"id":"b122","word":"وِرْد","wordEn":"Wird"},{"id":"k66","word":"وِرْد","wordEn":"Wird"}],wrd
[{"id":"k67","word":"عَقَبَة","wordEn":"A’qabah"}],Eqb
[{"id":"k68","word":"بَيْت","wordEn":"Bayt"}],byt
[{"id":"k68","word":"مَسْكَن","wordEn":"Masskan"}],skn
[{"id":"AA46","word":"أَهْل","wordEn":"Ahll"},{"id":"w2","word":"أَهْل","wordEn":"Ahl"},{"id":"m4","word":"أَهْل","wordEn":"Ahl"},{"id":"k68","word":"أَهْل","wordEn":"Ahl"}],Ahl,hlk
[{"id":"k69","word":"سَاعَة","wordEn":"Saa’ah"}],swE
[{"id":"k72","word":"خَيْل","wordEn":"Khayl"}],xyl
[{"id":"k72","word":"جِيَاد","wordEn":"Jiyaad"}],jwd
[{"id":"k73","word":"أَحَاطَ","wordEn":"Ahaata"}],HwT
[{"id":"k73","word":"حَاقَ","wordEn":"Haaqa"}],Hyq
[{"id":"t23","wordEn":"Qadara","word":"قَدَرَ"},{"id":"q1","word":"قَدَرَ","wordEn":"Qadara"}],qdr
[{"id":"q3","word":"قَبْر","wordEn":"Qabr"}],qbr
[{"id":"q5","word":"شُعُوب","wordEn":"Shuoob"}],$Eb
[{"id":"q5","word":"رَهْط","wordEn":"Raht"}],rhT
[{"id":"q5","word":"أَسْبَاط","wordEn":"Assbaat"}],sbT
[{"id":"q6","word":"قَتَلَ","wordEn":"Qatala"}],qtl
[{"id":"b88","word":"قَدَم","wordEn":"Qadam"},{"id":"q7","word":"قَدَم","wordEn":"Qadam"}],qdm
[{"id":"n15","word":"أَثَر","wordEn":"Athar"},{"id":"q7","word":"أَثَر","wordEn":"Athar"}],Avr
[{"id":"q9","word":"فُرْقَان","wordEn":"Fur’qaan"}],frq
[{"id":"q9","word":"حَدِيث","wordEn":"Hadeeth"}],Hdv
[{"id":"AA48","word":"بُدْن","wordEn":"E’shaar"},{"id":"q10","word":"بُدْن","wordEn":"Budn"}],bdn
[{"id":"q10","word":"نُسُك","wordEn":"Nusuk"}],nsk
[{"id":"q10","word":"هَدْي","wordEn":"Hadee"}],hdy
[{"id":"q11","word":"قَسَم","wordEn":"Qasam"}],qsm
[{"id":"h1","word":"يَمِين","wordEn":"Yameen"},{"id":"l15","word":"يَمِين","wordEn":"Yameen"},{"id":"q11","word":"يَمِين","wordEn":"Yameen"}],ymn
[{"id":"t24","wordEn":"Naqada","word":"نَقَضَ"},{"id":"q12","word":"نَقَضَ","wordEn":"Naqada"}],nqD
[{"id":"q13","word":"حُصُون","wordEn":"Husoon"}],HSn
[{"id":"q13","word":"صَيَاصِي","wordEn":"Sayaasee"}],SyS
[{"id":"q13","word":"بُرُوج","wordEn":"Burooj"}],brj
[{"id":"q15","word":"قَمِيص","wordEn":"Qamees"}],qmS
[{"id":"q17","word":"حَصِير","wordEn":"Haseer"}],HSr
[{"id":"f1","word":"نَفَعَ","wordEn":"Nafa’aa"}],nfE
[{"id":"k40","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f2","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f14","word":"فَتَحَ","wordEn":"Fataha"}],ftH
[{"id":"f2","word":"أَظْفَرَ","wordEn":"Azz’fara"}],Zfr
[{"id":"f3","word":"مَيْسَرَة","wordEn":"Maysarah"}],ysr
[{"id":"f3","word":"طَوْل","wordEn":"Tawl"}],Twl
[{"id":"m36","word":"سَعَة","wordEn":"Sa’ah"},{"id":"f3","word":"سَعَة","wordEn":"Sa’ah"}],wsE
[{"id":"f4","word":"رَحُبَ","wordEn":"Rahuba"}],rHb
[{"id":"f4","word":"وَسِعَ","wordEn":"Wasiaa"}],wsE
[{"id":"f5","word":"مَلَك","wordEn":"Malak"}],mlk
[{"id":"f5","word":"رُوح","wordEn":"Rooh"}],rwH,jrH
[{"id":"f6","word":"بُعْد","wordEn":"Bu’od"}],bEd
[{"id":"f7","word":"فِرْقَة","wordEn":"Firqah"}],frq
[{"id":"f7","word":"فَرِيق","wordEn":"Fareeq"}],frq
[{"id":"f7","word":"زُمَر","wordEn":"Zumar"}],zmr
[{"id":"f7","word":"شِيعَة","wordEn":"Sheeah"}],$yE
[{"id":"f12","word":"أَسْرَفَ","wordEn":"Assrafa"}],srf
[{"id":"k40","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f2","word":"فَتَحَ","wordEn":"Fataha"},{"id":"f14","word":"فَتَحَ","wordEn":"Fataha"}],ftH
[{"id":"AA36","word":"فَصَلَ","wordEn":"Fasala"},{"id":"f14","word":"فَصَلَ","wordEn":"Fasala"}],fSl
[{"id":"f14","word":"حَكَمَ","wordEn":"Hakama"}],Hkm
[{"id":"b104","word":"قَضَى","wordEn":"Qadaa"},{"id":"d19","wordEn":"Qadaa","word":"قَضَى","root":"qDA"},{"id":"f14","word":"قَضَى","wordEn":"Qadaa"}],qDy
[{"id":"g1","word":"كَهْف","wordEn":"Kahff"}],khf
[{"id":"g2","word":"أَلْهَى","wordEn":"Alhaa"}],lhw
[{"id":"A19","word":"ظَهَرَ","wordEn":"Tha’ha’ra"},{"id":"g3","word":"ظَهَرَ","wordEn":"Thahara"},{"id":"D1","word":"ظَهَرَ","wordEn":"Zahara"}],Zhr
[{"id":"g4","word":"غَبَرَة","wordEn":"Ghabarah"}],gbr
[{"id":"g4","word":"نَقْع","wordEn":"Naq’e"}],nqE
[{"id":"g5","word":"سَخَط","wordEn":"Sakhat"}],sxT
[{"id":"g5","word":"غَضَب","wordEn":"Ghadab"}],gDb
[{"id":"g6","word":"أَسْخَطَ","wordEn":"Asskhata"}],sxT
[{"id":"g7","word":"غَمّ","wordEn":"Ghamm"}],gmm
[{"id":"g7","word":"حُزْن","wordEn":"Huzn"}],Hzn
[{"id":"dd3","wordEn":"Khasha’aa","word":"خَشَعَ","root":"x$E"},{"id":"n31","word":"خَشَعَ","wordEn":"Khasha’aa"},{"id":"E2","word":"خَشَعَ","wordEn":"Khasha’aa"}],x$E
[{"id":"E3","word":"أَحْبَار","wordEn":"Ahbaar"}],Hbr
[{"id":"E4","word":"بِيَع","wordEn":"Beya’a"}],byE
[{"id":"E5","word":"عَذَاب","wordEn":"Athaab"}],E*b
[{"id":"b29","word":"عِقَاب","wordEn":"E’qaab"},{"id":"E5","word":"عِقَاب","wordEn":"Eqaab"}],Eqb
[{"id":"E5","word":"بَأْس","wordEn":"Ba’ass"}],bAs
[{"id":"E5","word":"نَكِير","wordEn":"Nakeer"}],nkr
[{"id":"b29","word":"وَبَال","wordEn":"Wabaal"},{"id":"E5","word":"وَبَال","wordEn":"Wabaal"}],wbl
[{"id":"E6","word":"عَذَّبَ","wordEn":"Ath’thaba"}],E*b
[{"id":"h16","word":"حُسْبَان","wordEn":"Hussbaan"},{"id":"E7","word":"حُسْبَان","wordEn":"Husbaan"}],Hsb
[{"id":"h16","word":"حَاصِب","wordEn":"Haasib"},{"id":"E7","word":"حَاصِب","wordEn":"Haasib"}],HSb
[{"id":"A28","word":"صَيْحَة","wordEn":"Say’hah"},{"id":"E7","word":"صَيْحَة","wordEn":"Sayhah"}],SyH
[{"id":"E7","word":"زَجْر","wordEn":"Zajrr"}],zjr
[{"id":"E8","word":"أَكْرَمَ","wordEn":"Akrama"}],krm
[{"id":"E9","word":"أَكْرَم","wordEn":"Akram"}],krm
[{"id":"E9","word":"وَجِيه","wordEn":"Wajeeh"}],wjh
[{"id":"E10","word":"حِجْر","wordEn":"Hijr"}],Hjr
[{"id":"E10","word":"حُلُم","wordEn":"Hulm"}],Hlm
[{"id":"E13","word":"وَعِيد","wordEn":"Waeed"}],wEd
[{"id":"E13","word":"عَهْد","wordEn":"Ahd"}],Ehd
[{"id":"E13","word":"إِصْر","wordEn":"Essr"}],ASr
[{"id":"E13","word":"عُقُود","wordEn":"Uqood"}],Eqd
[{"id":"A19","word":"ظَهَرَ","wordEn":"Tha’ha’ra"},{"id":"g3","word":"ظَهَرَ","wordEn":"Thahara"},{"id":"D1","word":"ظَهَرَ","wordEn":"Zahara"}],Zhr
[{"id":"b98","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D1","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D2","word":"جَهَرَ","wordEn":"Jahara"}],jhr
[{"id":"D1","word":"بَدَا","wordEn":"Badaa"}],bdw
[{"id":"D1","word":"حَصْحَصَ","wordEn":"Hass’hasa"}],HSHS
[{"id":"D2","word":"أَظْهَرَ","wordEn":"Azhara"}],Zhr
[{"id":"b98","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D1","word":"جَهَرَ","wordEn":"Jahara"},{"id":"D2","word":"جَهَرَ","wordEn":"Jahara"}],jhr
[{"id":"T1","word":"طَاقَة","wordEn":"Taaqah"}],Twq
[{"id":"T1","word":"مِرَّة","wordEn":"Mirrah"}],mrr
[{"id":"T1","word":"رُكْن","wordEn":"Rukn"}],rkn
[{"id":"T3","word":"طَرِيقَة","wordEn":"Tareeqah"}],Trq
[{"id":"d33","wordEn":"Sahree’ah","word":"شَرِيعَة","root":"$rE"},{"id":"T3","word":"شَرِيعَة","wordEn":"Sharee’ah"}],$rE
[{"id":"T3","word":"مِنْهَاج","wordEn":"Minhaaj"}],nhj
[{"id":"T3","word":"خُلُق","wordEn":"Khuluq"}],xlq
[{"id":"T4","word":"هَمَزَ","wordEn":"Hamaza"}],hmz