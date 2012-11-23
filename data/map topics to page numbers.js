var CSV=''
var process = function(csv){
  //console.log(csv);
  csv = csv.split('\n');CSV = csv[0] + '\n';
  csv = csv.slice(1);
  _.each(csv, function(l){
     var id = l.split(',')[0];
     var pg = findApproxPageNo(id).pg;
     CSV += (l +','+pg) + '\n';
  }); 
  console.log( CSV );
}
$.get('data/synonyms.csv', process)


Object
XHR finished loading: "http://localhost:8000/synonyms/data/synonyms.csv". jquery-1.8.2.min.js:2
id,topic,topicUr
A1,To settle,آباد ہونا
A2,"To cultivate, populate",آباد کرنا
A3,The Hereafter,آخرت  Also refer to the word قیامت
A4,"Man, human",آدمی انسان
A5,To rest,آرام کرنا
A6,To wish,آرزو کرنا
A7,Barrier,آڑ   Also refer toپردہ     and دیوار 
A8,Free,آزاد
A9,To free,آزادکرنا Also refer to رخصت کرنا
A10,"To test, Exam",آزمائش کرنا
A11,Easy,آسان
A12,heaven,آسمان
A13,To haunt,آسیب زدہ کرنا
A14,Fire,آگ
A15,"Live coal, cinder",آگ کا انگارہ
A16,"The burning of fire, to lit fire",آگ جلنا جلانا
A17,The fire’s burning something,آگ کا دوسری چیزوں  کو جلانا
A18,"To be extinguished, to extinguish",بجھنا بجھانا
A19,To be aware,آگاہ ہونا
A20,"To inform, show",آگاہ کرنا بتلانا
A21,"In front, ",آگے سامنے
A22,"To come forward, to go forward",آگے آنا بڑھنا
A23,To send forward,آگے بیھجنا 
A24,"Arms, weapons, armour",آلات جنگ
A25,To come,آنا
A26,Eyes,آنکھ
A27,To wander vagrancy,آوارہ پھرنا
A28,Noise and its kind,آواز اور اسکی اقسام
A29,To do something slowly,آہستہ آہستہ [کرنا]
AA1,"To boil, to rage",ابلنا [جوش مارنا]
AA2,Protrude,ابھار
AA3,To Encourage,ابھارنا
AA4,"To descend, to reveal, come down",اتارنا- اترنا
AA5,To be boastful/arrogant,اترانا – تکبر کرنا
AA6,To invent stories/slander,اٹکل پچو [من گھڑت]باتیں کرنا
AA7,"To carry, ",اٹھانا
AA8,To get up,اٹھنا
AA9,To get permission,اجازت لینا
AA10,"Obstinate, stubborn",اجڈ
AA11,Suddenly,اچانک
AA12,"Very good, better",اچھا خوب بہتر
AA13, To be strange,اچنبھا [اجنبی ہونا]
AA14,To do a favour,احسان کرنا
AA15,To have power,اختیار [رکھنا]
AA16,"To choose, select",اختیار کرنا 
AA17,Debt/credit,ادھار
AA18,To intend,ارادہ کرنا[قصد کرنا]
AA19,To persist,اڑنا
AA20,"To fly, to make fly",اڑنا اڑانا
AA21,To indicate,اشارہ کرنا
AA22,Obedience,اطاعت وتابعداری پیروی- فرمانبرداری
AA23,Middle Path/Balanced/Moderation,اعتدال
AA24,The book of deeds,اعمال نامہ
AA25,"Remorse,  regret",افسوس
AA26,To give authority ,اقتدار بخشنا
AA27,"To acknowledge,  admit",اقرار کرنا
AA28,"To gather,   assemble",اکٹھا کرنا
AA29,"To uproot,    uproot",اکھاڑنا-اکھڑنا
AA30,One,اکیلا
AA31,If,اگر
AA32,To turn over,الٹ دینا-اوندھا کرنا-ہونا
AA33,"To separate, to detatch",الگ[ جدا یا علحیدہ] کرنا
AA34,         To separate,الگ ہونا
AA35,To hope,امید    لگانا     امید لگانا
AA36,Intestines,انٹریاں
AA37,To await,انتظار کرنا 
AA38,End Result/Consequence,انجام [کار]
AA39,To estimate,andaza lagana
AA40,Inside,andar
AA41,Blind,اندھا
AA42,Justice(to do justice),انصاف[کرنا]
AA43,"To refute, to refuse",انکار کرنا
AA44,Fingers,انگلیاں
AA45,To cover,اوڑھنا
AA46,Children/Offspring,اولاد   
AA47,Wool,اون
AA48,Camel,اونٹ
AA49,Doze,اونگھ
AA50,Fuel,ایندھن  
AA51,"O,  (word of calling someone)",اے[حرف ندا] 
b1,Father,باپ
b2,To be blessed ,بابرکت ہونا
b3,speech,بات
b4,To talk,بات کرنا
b5,sovereignty,بادشاہی
b6,clouds,بادل
b7,Time/s,بار[دفعہ مرتبہ]
b8,Rain,بارش
b9,"To back off, abstain",باز آنا
b10,"Arm , wing of bird",بازو
b11,Garden,باغ
b12,To leave some remaining,باقی چھوڑنا
b13,Hair,بال
b14,Barren,بانجھ
b15,"To bind, fasten",باندھنا
b16,Statue,بت
b17,Lightning,بجلی
b18,To save,بچانا
b19,To be saved,بچنا
b20,Child,بچہ [لڑکا]
b21,To spread,بچھانا
b22,Spread/Bedding etc,بچھونا
b23,"To be stingy, miser",بخل کرنا
b24,Wretchedness,بدبختی
b25,To curse,بد دعا دینا 
b26,To become/ make disfigured,بدصورت بنانا ہونا
b27,"Immoral, sinful, sinner",بدکاری بدکار
b28,To substitute,بدل دینا
b29,Recompense,بدلہ
b30,To reward/recompense,بدلہ دینا
b31,To take revenge,بدلہ لینا
b32,To be Drunk/inebriated,بدمست ہونا
b33,"Bad, evil",برا- برائی
b34,"To abuse, revile",برابھلا کہنا
b35,To dislike/take offence,برا لگنا
b36," To be equal, to make equal",برابر ہونا- کرنا
b37,"To be ruined, to destroy",برباد ہونا- کرنا ضائع ہونا- کرنا
b38,To tolerate,برداشت کرنا
b39,"Great, noble, superior",بڑا- [بزرگ]
b40,Greatness,برائی 
b41,"Increase, to increase, expand",بڑھنا بڑھانا
b42,"Village, Villagers",بستی-بستی والے
b43,Goat,بکری
b44,"To be scattered, dishevelled",بکھرنا [پراگندہ ہونا]
b45,"To elevate, raise",بلند کرنا
b46,"To be lofty, to be above",بلند ہونا
b47,To make,بنانا
b48,"To close, shut",بند کرنا
b49,"Weave , knit",بننا
b50,"Load, burden",بوجھ
b51,"To be burdened, loaded",بوجھل ہونا [گراں ہونا]
b52,Old,بوڑھا
b53,"To decay, rot",بوسیدہ ہونا
b54,To speak,بولنا
b55," To Pour, to flow ",بہنا  بہانا
b56,"Excuse, to make an excuse",بہانہ – بہانہ بنانا
b57,slander,بہتان
b58,"Astray, to lead astray",بہکنا بہکانا
b59,"Flee , cause to flee",بھاگنا بھگانا
b60,brother,بھائی
b61,To fill up,بھر جانا
b62,hunger,بھوک
b63,"Forget, cause to forget",بھولنا بھلانا
b64,To roast like on a spit fire,بھننا
b65,"To send, dispatch",بھیجنا
b66,To narrate or state,بیان کرنا
b67,"Son , daughter",بیٹا بیٹی
b68,To sit,بیٹھنا
b69,Ill,بیمار
b70,Wife,بیوی
b71,"To be unfair, unjust",بے انصافی کرنا
b72,Disinclination,بے رغبتی کرنا
b73,To be annoyed and dissatisfied,بیزار ہونا
b74,Indeed,بیشک
b75,To be restless,بے قرار ہونا [کرنا]
b76,"To be jobless, worthless",بیکار ہونا
b77,Lacking good fortune,بےنصیب
b78,"Without want, Completely Independent",بےنیاز
b79,Nonsense and frivolous talk,بےہودہ کلام
b80,To be unconscious,بےہوش ہونا
p1,"Near, close",پاس
p2,Pure,پاک [ستھرا]
p3,"To purify, cleanse",پاک کرنا
p4,To obtain,پانا
p5,Water and its different types,پانی اور اسکی اقسام
p6,Different types of natural flowing water,پانی کے رستے اور اسکے ذخیرے
p7,To ask for water,پانی مانگنا
p8,Feet,پاوّں
p9,Stone,پتھر
p10,"Behind, latter",پچھلا
p11,To regret,پچھتانا
p12,To be old/ancient,پرانا ہونا
p13,Veil,پردہ
p14,"To cover, veil",پردہ کرنا
p15,To bring up/nurture,پرورش کرنا
p16,"To teach, to read",پڑھانا پڑھنا
p17,"To like, ",پسند کرنا
p18,"To shout, call out",پکارنا
p19,To seize,پکڑنا
p20,"Protection, shelter, refuge",پناہ – پناہ گاہ
p21,"To ask for refuge, to give refuge",پناہ مانگنا - دینا
p22,To ask,پوچھنا
p23,"Whole entire, (all)",پورا  [سارا سب]
p24,"Accomplish , to complete",پورا کرنا -ہونا
p25,"Garments, clothes",پوشاک
p26,Mountain,پہار
p27,To recognize,پہچاننا
p28,"First, at first",پہلا پہلی پہلے
p29,"Side, (in sleeping)",پہلو [کروٹ] 
p30, To reach,پہنچنا
p31,To deliver,پہنچانا
p32,"To tear, rip ",پھاڑنا
p33,"To Burst, explode",پھٹنا
p34,"To stroll, to wander",پھرنا  
p35,"To turn over, to refute",پھیرنا
p36,"To slip, cause to slip, to seduce",پھسلنا  پھسلانا
p37,Fruit,پھل
p38,Ripening of the fruit,پھل پکنا
p39,To blow,پھونک مارنا
p40,To spread,پھیلانا
p41,To discard,پھینکنا 
p42,Thirsty,پیاسا
p43,Bowl,پیالہ
p44,Puss,پیپ
p45,"Backbone, loin",پیٹھ پشت
p46,To follow,پیچھا کرنا
p47,"Back, behind",پیچھے
p48,"Ensue, to come after",پیچھے آنا
p49,To leave behind,چھوڑنا
p50,To stay behind,پیچھے رہنا
p51,"To put behind, cause to delay",پیچھے کرنا یا ڈالنا
p52,"To pursue, follow, cause to",پیچھے لگانا - لگنا
p53,Other derivatives of behind,پیچھے کے دوسرے مشتقات
p54,To create,پیدا کرنا
p55,To present,پیش کرنا
p56,Forehead,پیشانی
p57,Prophet,پیغمبر
p58,"The opponent, rival of prophets",پیغمبروں کے حریف
p59,To drink,پینا
t1,Star (different types),تارا [اقسام]
t2,Spread of darkness,تاریکی چھانا
t3,fresh,تازہ
t4,"So that, so not",تاکہ – تاکہ نہ
t5,Copper,تانبا
t6,"Throne,  bed",تخت 
t7,"Plank of wood, a board",تختہ
t8,"Plot, to plot",تدبیر –تدبیر کرنا
t9,scales,ترازو
t10,To carve,تراشنا
t11,vegetables,ترکاری
t12,Glorification of Allah,تسبیح و تقدیس
t13,Peace and consolation,تسکین تسلی
t14,"To interpret, ",تعبیر بتلانا
t15,To praise,تعریف کرنا
t16,"To honour, respect",تعظیم کرنا
t17,"To, until",تک
t18,"Trouble, difficulty, hardship",تکلیف
t19,"To trouble, to endure hardship",تکلیف دینا - اٹھانا
t20,"To cure, to be healthy",تندرست کرنا -ہونا
t21,"Poor, destitute",تنگدستی
t22,hardship,تنگی
t23,"To narrow down, ",تنگ کرنا- ہونا
t24,To break,توڑنا-
t25,To give Divine help,توفیق دینا- 
t26,Layered,تہ بہ تہ
t27,To get tired,تھکنا ]
t28,Stop ,تھمنا [رکنا]
t29,Less,تھوڑا
t30,To prepare,تیار کرنا
t31,Arrow,تیر
t32,Sharp,تیز
t33,Oil,تیل
t34,"Scowl, frown",تیوری چڑھانا
tt1,Piece,ٹکڑا
tt2,To break,ٹوٹنا
tt3,"To be cool , to cool",ٹھندا ہونا - کرنا
tt4,"To stay, to stop",ٹھیرنا [رکنا]
tt5,"To stay, to reside ",ٹھیرنا آباد ہونا
tt6,Hill and types,ٹیلہ اور اسکی اقسام
tt7,"Crooked, to be bent",ٹیڑھ  ٹیڑھا ہونا  
tt8,To lean against something,ٹیک لگانا
th1,proven,ثابت ہونا
th2,To be steadfast,ثابت قدم رہنا  رکھنا 
j1,To spy,جاسوسی کرنا
j2,To know,جاننا
j3,"Side,  towards, over there",جانب سمت
j4,when,جب
j5,root,جڑھ
j6,Body,جسم
j7,"To bind, fasten, shackle",جکڑنا
j8,Place,جگہ
j9,Exile,جلا وطنی
j10,"To hasten, to hurry",جلدی کرنا
j11,Group,جماعت
j12,Groups of animals,جماعت جانوروں کی
j13,Jinn,جن
j14,Paradise and its different names,جنت اور اسکے مختلف نام
j15,"War, battle",جنگ
j16,To give birth,جننا
j17,"To answer, reply",جواب دینا 
j18,"Adolescence, youth",جوانی
j19,"Couple, pair",جوڑا
j20,To join,جوڑنا
j21,"Where, wherever",جہاں-  جہاں کہیں
j22,To scold,جھڑکنا 
j23,"To bend, bow, incline, stoop",جھکنا مائل ہونا
j24,"Cause to bend, stoop",جھکانا
j25,To quarrel,جھگڑنا
j26,lie,جھوٹ 
j27,"To lie, fabricate", جھوٹ بولنا یا بنانا
j28,"To falsify, belie, refute",جھٹلانا
ch1,Keys,چابی کنجی
ch2,Sheet,چادر
ch3,"Fodder,  grains – food for herbivores",چارہ
ch4,Moon,چاند
ch5,"To like, intend, desire",چاہنا
ch6,To stay/be quiet,چپ ہونا رہنا
ch7,Lamp,چراغ
ch8,To graze,چرانا
ch9,"To climb, ascend, rise",چڑھنا
ch10,"Fountain, spring",چشمہ
ch11,The bursting and flowing of a  stream,اور بہنا چشمہ کا پھوٹنا
ch12,To walk and types of walking,چلنا
ch13,Cause to walk or move,چلانا
ch14,To scream,چلانا چیخنا
ch15,"To stick , cling",چمٹنا
ch16,"Shine/flash, to shine/flash",چمک چمکنا
ch17,"Some, few",چند
ch18,To choose,چن لینا
ch19,Creatures,چوپائے
ch20,Violently smashed  or broken into minute pieces,  ریزہ ریزہ کرنا چورہ چورہ
ch21,To steal,چوری کرنا
ch22,guard,چوکیدار
ch23," hide,  disappear",چھپنا [غائب ہونا]
ch24,To conceal,چھپانا
ch25,roof,چھت
ch26,To leave,چھوڑنا   
ch27,Cause to liberate,چھڑانا
ch28,Touch,چھونا
HA1,need,حاجت
HA2,present,حاضر
HA3,"Condition, state",حال - حالت
HA4,"Ruler, authoritarian ",حاکم
HA5,"To exceed bounds, transgress",حد سے بڑھنا – زیادتی کرنا
HA6,To fall short,حد سے کم کرنا
HA7,Forbidden,حرام
HA8,"Part, portion",حصہ
HA9,To protect,حفاظت کرنا
HA10,Rightful,حقدار
HA11,Right of dowry,حق مہر
HA12,"Order, to command",حکم حکم دینا
HA13,To attack,حملہ کرنا
HA14,To be astonished,حیران ہونا
HA15,Menstruation,حیض
kh1,husband,خاوند
kh2,news,خبر
kh3,finish,ختم ہونا
kh4,servant,خدمت گار
kh5,"Spoiled, ruined",خرابی
kh6,"To ruin, corrupt",خراب کرنا- ہونا
kh7,To spend,خرچ کرنا
kh8,To undertake transactions,خرید وفروخت کرنا
kh9,treasure,خزانہ
kh10,dry/dehydrated,خشک ہونا
kh11,"To liberate, to free",خلاصی چھٹکارا پانا
kh12,creation,خلقت مخلوق
kh13,dream,خواب
kh14,Wish/desire/hope,خواہش
kh15,Beautiful,خوبصورت
kh16,To bring food/nourishment,خوراک لانا
kh17,"To be happy, to make happy, to look happy",خوش ہونا – کرنا -لگنا
kh18,Happiness and Prosperity,خوشحالی 
kh19,"Bunch(of grapes etc), ear (of corn)",خوشے
kh20,Breach of trust,خیانت کرنا
kh21,"Tent, pavilion",خیمہ - سائبان
d1,"To enter, to be entered",داخل ہونا - کرنا
d2,Superintendent,داروغہ
d3,To mark/scar,داغ دینا
d4,"slim, lean",دبلا
d5,"Prolong, lengthen",دراز ہونا - کرنا
d6,Very persistent,در پے ہونا
d7,Trees and shrubs,درخت اور پودے
d8,"Correct, sound",درست ٹھیک
d9,"To correct, rectify",درست کرنا
d10,In between,درمیان
d11,"Enemy, animosity",دشمن دشمنی
d12,To pray for/to,دعا دینا - کرنا
d13,Heart,دل
d14,Inspiration in the heart,دل میں بات ڈالنا
d15,Proof,دلیل
d16,Day and its times,دن اور اسکے اوقات
d17,Different names for the world,دنیا کے مختلف نام
d18,Far away,دور
d19,"To distance, to be distanced",دور کرنا - ہونا
d20,To run,ڈورنا 
d21,Cause to run,ڈورانا
d22,Hell and its various names,دوزخ اور اسکے مختلف نام
d23,Angels of hell fire,دوزخ کے فرشتے
d24,friend,دوست
d25,"Drive (dogs out), revile, reprove",دھتکارنا
d26,Concealed,دھندلانا
d27,Smoke,دھواں
d28,Sunshine,دھوپ
d29,To deceive,دھوکہ دینا
d30,"To see, look ",دیکھنا
d31,Various ways of looking,دیکھنا [کیفیت نظر]
d32,To show/reveal,دکھلانا
d33,Religion,دین
d34,To give,دینا
d35,Wall,دیوار
d36,"Lunatic , insanity",دیوانہ- دیوانگی
dd1,"To throw, pour, cast away",ڈالنا
dd2,"To drown, dip",ڈبونا
dd3,To fear,ڈرنا
dd4,To frighten,ڈرانا
dd5,Bucket,ڈول
dd6,Shield,ڈھال
dd7,To cover,ڈھانکنا
dd8,Setting (ie sun) ,ڈھلنا
dd9,To search,ڈھونڈنا
dh1,To slaughter,ذبح کرنا
dh2,"Means, medium",ذریعہ
dh3,disgrace,ذلت
dh4,disgraced,ذلیل
dh5,To disgrace,ذلیل کرنا
dh6,responsibility,ذمہ داری
r1,night,رات
r2, Actions in the night,رات کے کام
r3,"Path, way",راہ - راستہ
r4,To establish,راہ ڈالنا –رائج کرنا
r5,"To satisfy, to be pleased ",راضی کرنا - ہونا
r6,To attain status,رتبہ پانا
r7,To face,رخ کرنا
r8,Worthless,ردی – نا کارہ
r9,Rope,رسسی
r10,Relative,رشتہ  دار
r11,Approval,رضامندی [خوشنودی]
r12,To incline,رغبت کرنا
r13,"To put, place ",رکھنا
r14,Colour,رنگ
r15,"Light, to illuminate",روشنی  روشن کرنا - ہونا
r16,Fasting person,روزہ دار
r17,"To prohibit, stop",روکنا
r18,To stop,رکنا
r19,To trample,روندنا
r20,"Splendor, illumined, resplendent",رونق
r21,Sand,ریت
z1,surplus,زائد
z2,To force,زبردستی کرنا
z3,"Wound , gash",زخم
z4,Period of time,زمانہ
z5,Earth and its varieties,زمین اور اسکی اقسام
z6,Sink/collapse into the Earth,زمین بوس ہونا – کرنا 
z7,Chains,زنجیریں
z8,Bring to live,زندہ کرنا
z9,To be live,زندہ ہونا - رہنا
z10,"Elegance, beauty, ornaments",زینت
s1,Along with,ساتھ
s2,companion,ساتھی
s3,Year ,سال
s4,"Goods, provisions",سامان
s5,"To face, appear in front of",سامنے آنا
s6,snake,سانپ
s7,"All,  whole, entire",سب سارے
s8,To entrust,سپرد [حوالے] کرنا
s9,truth,سچ
s10,hard,سخت
s11,hardness,سختی
s12,To raise head,سر اٹھانا
s13,"Chief , leader",سردار
s14,"Cold , winter",سردی
s15,Reckless and arrogant,سرکشی کرنا
s16,To whisper,سرگوشی کرنا
s17,tunnel,سرنگ
s18,"To be lazy, procastinate",سستی کرنا
s19,To travel,سفر کرنا
s20,"to understand, to advise",سمجھنا - سمجھانا
s21,To listen,سننا
s22,To adorn,سنوارنا
s23,"To ride, to mount",سوار ہونا - کرنا
s24,except,سوائے
s25,To sleep,سونا
s26,black,سیاہ سیاہی
s27,straight,سیدھا سیدھی
s28,Cause to travel,سیر کرانا
s29,ladder,سیڑھی
s30,"To learn, teach",سیکھنا سیکھانا
sh1,branch,شاخ
sh2,evening,شام
sh3,maybe,شائد
sh4,"Beer, wine",شراب 
sh5,To be shy,شرمانا
sh6, To start,شروع کرنا
sh7,Private part,شرمگاہ
sh8,"Accomplice, partner",شریک
sh9,Flame,شعلہ
sh10,"Doubt, suspicion",شک و شبہ
sh11,"Shape, figure",شکل و صورت
sh12,Give shape,شکل و صورت بنانا
sh13,split,شگاف
sh14,"Town, city",شہر
sh15,glass,شیشہ
SA1,"To cleanse, wipe ",صاف کرنا
SA2,morning,صبح
SA3,Actions related to the  morning,صبح کرنا
SA4,To be patient,صبر کرنا
SA5,Peace treaty,صلح
DA1,guarantor,ضامن
TA1,Strength,Taaqat
TA2,"Having strength, strong",Taaqat rakhna
TA3,Tradition,"Tareeqah, Dastoor"
TA4,Taunt,Tanah deyna
TA5,To put shackles,Thawq dalna
TA6,To keep hope,Tama3 rakhna
TA7,To decide,Tay karna
ZA1,"To become manifest, revealed",ظاہر ہونا
ZA2,"To reveal, manifest",ظاہر کرنا
E1,"To be helpless, fall short",عاجز آنا
E2,To show humility,عاجزی کرنا
E3,scholar,عالم 
E4,Places of worships,عبادت گاہیں
E5,punishment,عزاب – سزا 
E6,To give punishment,عزاب دینا
E7,Different types of punishments,عزاب کی اقسام
E8,Confer honor/ dignity,عزت بخشنا
E9,"Honorable, respectable",عزت والا - معزز
E10,"Brain, intelligent",عقل - عقلمند
E11,To lose his brains,عقل کھودینا
E12,women,عورت
E13,"Promise , oath",عہد - وعدہ
gh1,Cave,غار 
gh2,To be neglectful,غافل ہونا – کرنا 
gh3,"To become overpowered, to be overpowered,  to overpower, ",غالب آنا  ہونا کرنا
gh4,Dust,غبار 
gh5,"Anger, temper",غصہ
gh6,To enrage,غصۃ دلانا
gh7,"Grief, sadness",غم
gh8,To be sad,غمگین ہونا
gh9,To reflect,غور کرنا
f1,"Benefit, to give benefit",فائدہ – فائدہ دینا
f2,To conquer,فتح ہونا -دینا
f3,Sufficient,فراخی آسودگی 
f4,"To be broaden, to make space",فراخ ہونا – کرنا 
f5,Angel,فرشتہ
f6,Difference,فرق
f7,Group of people,فرقہ - گروہ
f8,Cry out for assistance ,فریاد رسی
f9,To implore,فریاد کرنا
f10,"To corrupt, to create problems",فساد کرنا- ڈالنا
f11,Useless talk ,فضول باتیں کرنا
f12,To spend  excessively,فضول خرچی کرنا
f13,To give honour,فضیلت دینا
f14,To decree/make a decision,فیصلہ کرنا
q1,To gain control,قابو پانا
q2,caravan,قافلہ
q3,grave,قبر
q4,To accept,قبول کرنا
q5,"Family,tribe",قبیلہ خاندان
q6,To kill,قتل کرنا 
q7,step,قدم
q8,To have stability,قرار پکڑنا
q9,Different names of the Quran,قرآن کے مختلف نام
q10,Animal of sacrificeا,قربانی کا جانور
q11,To take an oath,قسم اٹھانا
q12,To break an oath,قسم توڑنا
q13,fort,قلعہ
q14,To strengthen,قوت دینا 
q15,"Shirt, garment",قمیص
q16,Doomsday and its different names,قیامت اور اسکے مختلف نام
q17,jail,قید خانہ
q18,To imprison,قید کرنا   قیدی بنانا
k1,"To cut, ",کاٹنا
k2,Cut,کٹنا
k3,Paper,کاغز
k4,To be enough,کافی ہونا
k5,To be of use,کام آنا
k6,"Work, To work",کام – کام کرنا
k7,To be successful,کامیاب ہونا
k8,Ears,کان
k9,"To tremble, shiver",کانپنا
k10,When,کب
k11,Book,کتاب
k12,"To dodge, evade",کترا جانا – بچ کر نکل جانا
k13,"How much, how many",کتنا کتنے
k14,To scratch,کریدنا
k15,"Bitter, unpalatable",کڑوا
k16,"Peasant, farmer",کسان
k17,ship,کشتی جہاز
k18,Kaaba and its different names,کعبہ اور اسکے مختلف نام
k19,"Yesterday, tomorrow",کل
k20," To decrease, ", گھٹانا  کم کرنا کمی کرنا
k21,"To earn, ",کمانا – کمائی کرنا
k22,Room,کمرہ
k23,Weak,کمزور
k24,"Edge, brink",کنارہ 
k25,Well,کنواں
k26,Whip,کوڑا
k27,"To endeavor,",کوشش کرنا
k28,Who,کون
k29,"Anybody, somebody",کوئی
k30,"Who , which, that, such as",کہ گویا کہ
k31,Where,کہاں
k32,"Stories, legends, incidents",کہانیاں  واقعات
k33,Skin,کھال
k34,To remove the skin,کھال اتارنا
k35,Food,کھانا
k36,To feed,کھلانا
k37,dates,کھجور
k38,"To stand, cause to stand",کھڑا ہونا - کرنا
k39,To boil,کھولنا
k40,To open,کھولنا
k41,Fields  of crop,کھیتی
k42,To pull,کھینچنا
k43,To play,کھیلنا
k44,What,کیا
k45,How,کیسے
k46,"Why, why not",کیوں – کیوں نہ
gg1,To pitch/plant,گاڑنا
gg2,Passage of time,گردش ایام
gg3,Neck,گردن
gg4,"To grasp, to arrest",گرفت کرنا
gg5,"Heat, to heat, to be hot",گرمی – گرم کرنا- ہونا 
gg6,To obtain heat,گرمی حاصل کرنا
gg7,"To fall, cause to fall",گرنا - گرانا
gg8,To pawn,گروی رکھنا
gg9,Ditch,گڑھا
gg10,To pass by,گزرنا
gg11,neck,گلا
gg12,To be lost,گم ہونا
gg13,To think/have thoughts,گمان کرنا
gg14,Sin,گناہ
gg15,Sinful,گنہگار
gg16,"Filth, impurity",گند گی نجاست
gg17,To count,گننا
gg18,Lap,گود
gg19,"Deep, deepness",گہرا - گہرائی
gg20,Watering place,گھاٹ 
gg21,Valley,گھاٹی
gg22,House,گھر
gg23,Time,گھڑی
gg24,Enter by force,گھسنا
gg25,To drag,گھسیٹنا
gg26,horse,گھوڑا
gg27,To surround,گھیرنا
l1,"Stick, staff",لاٹھی
l2,To bring,لانا
l3,To be capable,لائق ہونا
l4,"To coil , enwrap",لپیٹنا لپٹنا
l5,"To hang, dangle",لٹکنا لٹکانا
l6,To regard,لحاظ رکھنا
l7,Army,لشکر
l8,Wood,لکڑی
l9,To write,لکھنا
l10,Cause to write,لکھوانا
l11,Writers,لکھنے والے
l12,Continuous,لگاتار پے در پے
l13,To return,لوٹانا لوٹنا  رجوع کرنا
l14,Divine tablet recording and its various names,لوح محفوظ اور اسکے مختلف نام
l15,"Maid, servant",لونڈی  غلام 
l16,To take,لینا
l17,To be involved in transactions,لین دین کرنا
m1,"To hit, beat, whip, stone",مارنا
m2,"To kill, to die",مار ڈالنا - مرنا
m3,Goods wealth,مال و دولت
m4,Owner,مالک
m5,Mother,ماں
m6,"To ask, beg",مانگنا
m7,To erase,مٹانا
m8,Soil and its different stages,مٹی اور اسکی مختلف حالتیں
m9,"To copulate, intercourse",مجامعت کرنا
m10,"Organization, meeting",مجلس
m11,Fish,مچھلی
m12,Love – to love,محبت -  کرنا
m13,Palace,محل
m14,"To work hard, to endure hardship",محنت کرنا – مشقت اٹھانا
m15,To actively oppose,مخالفت کرنا
m16,"Different, various",مختلف
m17,"Time, length of time",مدت
m18,"To help, assist, to wish for help",مدد دینا – کرنا - چاہنا
m19,helper,مدد گار
m20,To ridicule,مزاق اڑانا
m21,man,مرد
m22,Taste,مزا 
m23,"To adorn, decorate",مزین کرنا
m24,traveller,مسافر
m25,To harness,مسخر کرنا
m26,To subdued,مسلط کرنا
m27,To be busy,مشغول ہونا - 
m28,To put in hardship,مشقت میں ڈالنا
m29,To consult,مشورہ کرنا
m30,To make famous,مشہور کرنا
m31,"Strong, fixed",مضبوط 
m32,"To make it firm, strong",مضبوط بنانا - کرنا
m33,"To forgive, pardon",معاف کرنا  بخشنا درگزر کرنا
m34,Deity,معبود
m35,Status and capacity,مقدور - حیثیت
m36,"To appoint, ",مقرر کرنا
m37,fly,مکھی
m38,To meet,ملنا
m39,"To join, mix, blend ",ملانا
m40,To turn your face away,منہ پھیرنا
m41,To agree,موافقت کرنا
m42,"To bend, turn",موڑنا
m43,Merciful,مہربان
m44,"To stamp, to put a seal",مہر لگانا
m45,"To give time, reprieve",مہلت دینا
m46,Visitor,مہمان
m47,Months,مہینے
m48,"Peg, nail",میخ
n1,To be hopeless,نا امید ہونا
n2,"Impure, polluted, ",ناپاک
n3,Disliked thing,ناپسندیدہ
n4,"Ignorant, naive",نادان
n5,Upset and angry,ناراضگی
n6,Ungrateful,ناشکرا
n7,To disobey,نافرمانی کرنا
n8,Nose,ناک
n9,"Name, to keep a name",نام - رکھنا
n10,Inauspicious,نامبارک
n11,To be liberated,نجات پانا
n12,Gifts and oblations,نذر و نیاز
n13,"To be soft, soften",نرم ہونا - کرنا
n14,"To be near, to make it close",نزدیک ہونا - کرنا
n15,sign,نشانی
n16,To place an emblem,نشان لگانا
n17,"Advice, to give , to attain",نصیحت – کرنا – حاصل کرنا
n18,"Grace, divine blessings",نعمت
n19,To give blessings,نعمت عطا کرنا
n20,"To have loss, incur loss",نقصان ہونا - اٹھانا
n21,"To marry, marry off",نکاح کرنا - کرانا
n22,To come out,نکلنا
n23,To take out,نکالنا
n24,"Glance, sight",نگاہ
n25,watchman,نگہبان
n26,To swallow,نگلنا
n27,To wash,نہانا -دھونا
n28,"No, nay",نہیں
n29,"New , to be fresh",نیا – نیا ہونا
n30,"Under, lowest",نیچے
n31,To lower,نیچے [پست ] کرنا
n32,"Pious, virtuous",نیک  نیکبخت
n33,"Good, piety",نیکی – نیک کام
n34,"To do good, ",نیکی کرنا
w1,plentiful,وافر- بہت
w2,The ones of/the people of ,والا-  والے
w3,inheritance,وراثت
w4,time,وقت
h1,"Hand, either right hand or left hand, arm",ہاتھ
h2,yes,ہاں
h3,To pant,ہانپنا
h4,To remove,ہٹانا
h5,"To receive guidance, to give guidance",ہدایت دینا پانا
h6,destruction,ہلاکت
h7,"To be perished, to destroy",ہلاک ہونا - کرنا
h8,"To be light(in weight), to make light",ہلکا ہونا - کرنا
h9,"To move, to shake ",ہلنا - ہلانا
h10,Congruence ,ہم آہنگی - ہونا
h11,To lose heart,ہمت ہارنا
h12,To make level,ہموار کرنا
h13,Always,ہمیشہ
h14,To remain always,ہمیشہ ہونا - رہنا
h15,To laugh,ہنسنا
h16,Wind  and its different types,ہوا اور اسکی اقسام
h17,To happen,ہونا
y1,or,یا
y2,To remember,یاد کرنا – آنا - رکھنا
y3,"To belief, to have faith",یقین کرنا
y4,To have complete devotion,یکسو ہونا



id,topic,topicUr,473
A1,To settle,آباد ہونا,67
A2,"To cultivate, populate",آباد کرنا,69
A3,The Hereafter,آخرت  Also refer to the word قیامت,70
A4,"Man, human",آدمی انسان,71
A5,To rest,آرام کرنا,74
A6,To wish,آرزو کرنا,74
A7,Barrier,آڑ   Also refer toپردہ     and دیوار ,76
A8,Free,آزاد,78
A9,To free,آزادکرنا Also refer to رخصت کرنا,79
A10,"To test, Exam",آزمائش کرنا,80
A11,Easy,آسان,82
A12,heaven,آسمان,83
A13,To haunt,آسیب زدہ کرنا,84
A14,Fire,آگ,85
A15,"Live coal, cinder",آگ کا انگارہ,85
A16,"The burning of fire, to lit fire",آگ جلنا جلانا,86
A17,The fire’s burning something,آگ کا دوسری چیزوں  کو جلانا,88
A18,"To be extinguished, to extinguish",بجھنا بجھانا,89
A19,To be aware,آگاہ ہونا,90
A20,"To inform, show",آگاہ کرنا بتلانا,91
A21,"In front, ",آگے سامنے,93
A22,"To come forward, to go forward",آگے آنا بڑھنا,94
A23,To send forward,آگے بیھجنا ,95
A24,"Arms, weapons, armour",آلات جنگ,96
A25,To come,آنا,97
A26,Eyes,آنکھ,98
A27,To wander vagrancy,آوارہ پھرنا,99
A28,Noise and its kind,آواز اور اسکی اقسام,100
A29,To do something slowly,آہستہ آہستہ [کرنا],103
AA1,"To boil, to rage",ابلنا [جوش مارنا],106
AA2,Protrude,ابھار,106
AA3,To Encourage,ابھارنا,108
AA4,"To descend, to reveal, come down",اتارنا- اترنا,109
AA5,To be boastful/arrogant,اترانا – تکبر کرنا,112
AA6,To invent stories/slander,اٹکل پچو [من گھڑت]باتیں کرنا,114
AA7,"To carry, ",اٹھانا,115
AA8,To get up,اٹھنا,118
AA9,To get permission,اجازت لینا,119
AA10,"Obstinate, stubborn",اجڈ,120
AA11,Suddenly,اچانک,121
AA12,"Very good, better",اچھا خوب بہتر,121
AA13, To be strange,اچنبھا [اجنبی ہونا],123
AA14,To do a favour,احسان کرنا,124
AA15,To have power,اختیار [رکھنا],125
AA16,"To choose, select",اختیار کرنا ,126
AA17,Debt/credit,ادھار,127
AA18,To intend,ارادہ کرنا[قصد کرنا],128
AA19,To persist,اڑنا,129
AA20,"To fly, to make fly",اڑنا اڑانا,130
AA21,To indicate,اشارہ کرنا,131
AA22,Obedience,اطاعت وتابعداری پیروی- فرمانبرداری,132
AA23,Middle Path/Balanced/Moderation,اعتدال,134
AA24,The book of deeds,اعمال نامہ,135
AA25,"Remorse,  regret",افسوس,136
AA26,To give authority ,اقتدار بخشنا,137
AA27,"To acknowledge,  admit",اقرار کرنا,137
AA28,"To gather,   assemble",اکٹھا کرنا,138
AA29,"To uproot,    uproot",اکھاڑنا-اکھڑنا,140
AA30,One,اکیلا,140
AA31,If,اگر,143
AA32,To turn over,الٹ دینا-اوندھا کرنا-ہونا,144
AA33,"To separate, to detatch",الگ[ جدا یا علحیدہ] کرنا,145
AA34,         To separate,الگ ہونا,147
AA35,To hope,امید    لگانا     امید لگانا,149
AA36,Intestines,انٹریاں,150
AA37,To await,انتظار کرنا ,150
AA38,End Result/Consequence,انجام [کار],152
AA39,To estimate,andaza lagana,153
AA40,Inside,andar,153
AA41,Blind,اندھا,154
AA42,Justice(to do justice),انصاف[کرنا],155
AA43,"To refute, to refuse",انکار کرنا,157
AA44,Fingers,انگلیاں,158
AA45,To cover,اوڑھنا,158
AA46,Children/Offspring,اولاد   ,159
AA47,Wool,اون,162
AA48,Camel,اونٹ,162
AA49,Doze,اونگھ,165
AA50,Fuel,ایندھن  ,165
AA51,"O,  (word of calling someone)",اے[حرف ندا] ,166
b1,Father,باپ,167
b2,To be blessed ,بابرکت ہونا,168
b3,speech,بات,169
b4,To talk,بات کرنا,171
b5,sovereignty,بادشاہی,172
b6,clouds,بادل,173
b7,Time/s,بار[دفعہ مرتبہ],174
b8,Rain,بارش,175
b9,"To back off, abstain",باز آنا,177
b10,"Arm , wing of bird",بازو,178
b11,Garden,باغ,178
b12,To leave some remaining,باقی چھوڑنا,179
b13,Hair,بال,180
b14,Barren,بانجھ,180
b15,"To bind, fasten",باندھنا,181
b16,Statue,بت,182
b17,Lightning,بجلی,183
b18,To save,بچانا,184
b19,To be saved,بچنا,185
b20,Child,بچہ [لڑکا],186
b21,To spread,بچھانا,188
b22,Spread/Bedding etc,بچھونا,190
b23,"To be stingy, miser",بخل کرنا,190
b24,Wretchedness,بدبختی,193
b25,To curse,بد دعا دینا ,195
b26,To become/ make disfigured,بدصورت بنانا ہونا,196
b27,"Immoral, sinful, sinner",بدکاری بدکار,197
b28,To substitute,بدل دینا,198
b29,Recompense,بدلہ,200
b30,To reward/recompense,بدلہ دینا,203
b31,To take revenge,بدلہ لینا,204
b32,To be Drunk/inebriated,بدمست ہونا,205
b33,"Bad, evil",برا- برائی,206
b34,"To abuse, revile",برابھلا کہنا,207
b35,To dislike/take offence,برا لگنا,209
b36," To be equal, to make equal",برابر ہونا- کرنا,209
b37,"To be ruined, to destroy",برباد ہونا- کرنا ضائع ہونا- کرنا,210
b38,To tolerate,برداشت کرنا,212
b39,"Great, noble, superior",بڑا- [بزرگ],213
b40,Greatness,برائی ,214
b41,"Increase, to increase, expand",بڑھنا بڑھانا,215
b42,"Village, Villagers",بستی-بستی والے,217
b43,Goat,بکری,218
b44,"To be scattered, dishevelled",بکھرنا [پراگندہ ہونا],218
b45,"To elevate, raise",بلند کرنا,220
b46,"To be lofty, to be above",بلند ہونا,220
b47,To make,بنانا,221
b48,"To close, shut",بند کرنا,222
b49,"Weave , knit",بننا,223
b50,"Load, burden",بوجھ,223
b51,"To be burdened, loaded",بوجھل ہونا [گراں ہونا],226
b52,Old,بوڑھا,227
b53,"To decay, rot",بوسیدہ ہونا,228
b54,To speak,بولنا,229
b55," To Pour, to flow ",بہنا  بہانا,231
b56,"Excuse, to make an excuse",بہانہ – بہانہ بنانا,233
b57,slander,بہتان,234
b58,"Astray, to lead astray",بہکنا بہکانا,235
b59,"Flee , cause to flee",بھاگنا بھگانا,237
b60,brother,بھائی,239
b61,To fill up,بھر جانا,239
b62,hunger,بھوک,240
b63,"Forget, cause to forget",بھولنا بھلانا,241
b64,To roast like on a spit fire,بھننا,242
b65,"To send, dispatch",بھیجنا,242
b66,To narrate or state,بیان کرنا,243
b67,"Son , daughter",بیٹا بیٹی,245
b68,To sit,بیٹھنا,246
b69,Ill,بیمار,247
b70,Wife,بیوی,248
b71,"To be unfair, unjust",بے انصافی کرنا,249
b72,Disinclination,بے رغبتی کرنا,251
b73,To be annoyed and dissatisfied,بیزار ہونا,252
b74,Indeed,بیشک,253
b75,To be restless,بے قرار ہونا [کرنا],254
b76,"To be jobless, worthless",بیکار ہونا,255
b77,Lacking good fortune,بےنصیب,256
b78,"Without want, Completely Independent",بےنیاز,256
b79,Nonsense and frivolous talk,بےہودہ کلام,257
b80,To be unconscious,بےہوش ہونا,258
p1,"Near, close",پاس,260
p2,Pure,پاک [ستھرا],261
p3,"To purify, cleanse",پاک کرنا,265
p4,To obtain,پانا,266
p5,Water and its different types,پانی اور اسکی اقسام,267
p6,Different types of natural flowing water,پانی کے رستے اور اسکے ذخیرے,269
p7,To ask for water,پانی مانگنا,271
p8,Feet,پاوّں,272
p9,Stone,پتھر,273
p10,"Behind, latter",پچھلا,273
p11,To regret,پچھتانا,274
p12,To be old/ancient,پرانا ہونا,275
p13,Veil,پردہ,276
p14,"To cover, veil",پردہ کرنا,279
p15,To bring up/nurture,پرورش کرنا,279
p16,"To teach, to read",پڑھانا پڑھنا,281
p17,"To like, ",پسند کرنا,283
p18,"To shout, call out",پکارنا,284
p19,To seize,پکڑنا,285
p20,"Protection, shelter, refuge",پناہ – پناہ گاہ,287
p21,"To ask for refuge, to give refuge",پناہ مانگنا - دینا,289
p22,To ask,پوچھنا,290
p23,"Whole entire, (all)",پورا  [سارا سب],291
p24,"Accomplish , to complete",پورا کرنا -ہونا,292
p25,"Garments, clothes",پوشاک,294
p26,Mountain,پہار,295
p27,To recognize,پہچاننا,296
p28,"First, at first",پہلا پہلی پہلے,296
p29,"Side, (in sleeping)",پہلو [کروٹ] ,297
p30, To reach,پہنچنا,298
p31,To deliver,پہنچانا,301
p32,"To tear, rip ",پھاڑنا,302
p33,"To Burst, explode",پھٹنا,304
p34,"To stroll, to wander",پھرنا  ,306
p35,"To turn over, to refute",پھیرنا,308
p36,"To slip, cause to slip, to seduce",پھسلنا  پھسلانا,309
p37,Fruit,پھل,311
p38,Ripening of the fruit,پھل پکنا,312
p39,To blow,پھونک مارنا,312
p40,To spread,پھیلانا,313
p41,To discard,پھینکنا ,315
p42,Thirsty,پیاسا,316
p43,Bowl,پیالہ,317
p44,Puss,پیپ,318
p45,"Backbone, loin",پیٹھ پشت,319
p46,To follow,پیچھا کرنا,320
p47,"Back, behind",پیچھے,320
p48,"Ensue, to come after",پیچھے آنا,322
p49,To leave behind,چھوڑنا,323
p50,To stay behind,پیچھے رہنا,323
p51,"To put behind, cause to delay",پیچھے کرنا یا ڈالنا,324
p52,"To pursue, follow, cause to",پیچھے لگانا - لگنا,325
p53,Other derivatives of behind,پیچھے کے دوسرے مشتقات,326
p54,To create,پیدا کرنا,327
p55,To present,پیش کرنا,329
p56,Forehead,پیشانی,329
p57,Prophet,پیغمبر,330
p58,"The opponent, rival of prophets",پیغمبروں کے حریف,331
p59,To drink,پینا,334
t1,Star (different types),تارا [اقسام],336
t2,Spread of darkness,تاریکی چھانا,337
t3,fresh,تازہ,338
t4,"So that, so not",تاکہ – تاکہ نہ,339
t5,Copper,تانبا,340
t6,"Throne,  bed",تخت ,340
t7,"Plank of wood, a board",تختہ,341
t8,"Plot, to plot",تدبیر –تدبیر کرنا,341
t9,scales,ترازو,343
t10,To carve,تراشنا,343
t11,vegetables,ترکاری,344
t12,Glorification of Allah,تسبیح و تقدیس,344
t13,Peace and consolation,تسکین تسلی,345
t14,"To interpret, ",تعبیر بتلانا,346
t15,To praise,تعریف کرنا,347
t16,"To honour, respect",تعظیم کرنا,347
t17,"To, until",تک,348
t18,"Trouble, difficulty, hardship",تکلیف,348
t19,"To trouble, to endure hardship",تکلیف دینا - اٹھانا,350
t20,"To cure, to be healthy",تندرست کرنا -ہونا,351
t21,"Poor, destitute",تنگدستی,352
t22,hardship,تنگی,354
t23,"To narrow down, ",تنگ کرنا- ہونا,355
t24,To break,توڑنا-,357
t25,To give Divine help,توفیق دینا- ,358
t26,Layered,تہ بہ تہ,359
t27,To get tired,تھکنا ],360
t28,Stop ,تھمنا [رکنا],361
t29,Less,تھوڑا,362
t30,To prepare,تیار کرنا,363
t31,Arrow,تیر,364
t32,Sharp,تیز,364
t33,Oil,تیل,365
t34,"Scowl, frown",تیوری چڑھانا,365
tt1,Piece,ٹکڑا,367
tt2,To break,ٹوٹنا,370
tt3,"To be cool , to cool",ٹھندا ہونا - کرنا,370
tt4,"To stay, to stop",ٹھیرنا [رکنا],371
tt5,"To stay, to reside ",ٹھیرنا آباد ہونا,372
tt6,Hill and types,ٹیلہ اور اسکی اقسام,373
tt7,"Crooked, to be bent",ٹیڑھ  ٹیڑھا ہونا  ,374
tt8,To lean against something,ٹیک لگانا,376
th1,proven,ثابت ہونا,377
th2,To be steadfast,ثابت قدم رہنا  رکھنا ,377
j1,To spy,جاسوسی کرنا,379
j2,To know,جاننا,379
j3,"Side,  towards, over there",جانب سمت,380
j4,when,جب,381
j5,root,جڑھ,382
j6,Body,جسم,383
j7,"To bind, fasten, shackle",جکڑنا,384
j8,Place,جگہ,384
j9,Exile,جلا وطنی,385
j10,"To hasten, to hurry",جلدی کرنا,386
j11,Group,جماعت,387
j12,Groups of animals,جماعت جانوروں کی,391
j13,Jinn,جن,392
j14,Paradise and its different names,جنت اور اسکے مختلف نام,393
j15,"War, battle",جنگ,394
j16,To give birth,جننا,396
j17,"To answer, reply",جواب دینا ,397
j18,"Adolescence, youth",جوانی,397
j19,"Couple, pair",جوڑا,398
j20,To join,جوڑنا,398
j21,"Where, wherever",جہاں-  جہاں کہیں,399
j22,To scold,جھڑکنا ,400
j23,"To bend, bow, incline, stoop",جھکنا مائل ہونا,400
j24,"Cause to bend, stoop",جھکانا,403
j25,To quarrel,جھگڑنا,403
j26,lie,جھوٹ ,405
j27,"To lie, fabricate", جھوٹ بولنا یا بنانا,406
j28,"To falsify, belie, refute",جھٹلانا,407
ch1,Keys,چابی کنجی,408
ch2,Sheet,چادر,408
ch3,"Fodder,  grains – food for herbivores",چارہ,409
ch4,Moon,چاند,410
ch5,"To like, intend, desire",چاہنا,410
ch6,To stay/be quiet,چپ ہونا رہنا,412
ch7,Lamp,چراغ,413
ch8,To graze,چرانا,413
ch9,"To climb, ascend, rise",چڑھنا,414
ch10,"Fountain, spring",چشمہ,416
ch11,The bursting and flowing of a  stream,اور بہنا چشمہ کا پھوٹنا,416
ch12,To walk and types of walking,چلنا,419
ch13,Cause to walk or move,چلانا,421
ch14,To scream,چلانا چیخنا,423
ch15,"To stick , cling",چمٹنا,423
ch16,"Shine/flash, to shine/flash",چمک چمکنا,424
ch17,"Some, few",چند,425
ch18,To choose,چن لینا,426
ch19,Creatures,چوپائے,427
ch20,Violently smashed  or broken into minute pieces,  ریزہ ریزہ کرنا چورہ چورہ,428
ch21,To steal,چوری کرنا,430
ch22,guard,چوکیدار,431
ch23," hide,  disappear",چھپنا [غائب ہونا],431
ch24,To conceal,چھپانا,433
ch25,roof,چھت,435
ch26,To leave,چھوڑنا   ,436
ch27,Cause to liberate,چھڑانا,438
ch28,Touch,چھونا,439
HA1,need,حاجت,441
HA2,present,حاضر,442
HA3,"Condition, state",حال - حالت,442
HA4,"Ruler, authoritarian ",حاکم,443
HA5,"To exceed bounds, transgress",حد سے بڑھنا – زیادتی کرنا,444
HA6,To fall short,حد سے کم کرنا,446
HA7,Forbidden,حرام,446
HA8,"Part, portion",حصہ,447
HA9,To protect,حفاظت کرنا,449
HA10,Rightful,حقدار,450
HA11,Right of dowry,حق مہر,450
HA12,"Order, to command",حکم حکم دینا,451
HA13,To attack,حملہ کرنا,452
HA14,To be astonished,حیران ہونا,452
HA15,Menstruation,حیض,453
kh1,husband,خاوند,454
kh2,news,خبر,455
kh3,finish,ختم ہونا,455
kh4,servant,خدمت گار,456
kh5,"Spoiled, ruined",خرابی,457
kh6,"To ruin, corrupt",خراب کرنا- ہونا,458
kh7,To spend,خرچ کرنا,460
kh8,To undertake transactions,خرید وفروخت کرنا,460
kh9,treasure,خزانہ,461
kh10,dry/dehydrated,خشک ہونا,462
kh11,"To liberate, to free",خلاصی چھٹکارا پانا,463
kh12,creation,خلقت مخلوق,464
kh13,dream,خواب,464
kh14,Wish/desire/hope,خواہش,465
kh15,Beautiful,خوبصورت,466
kh16,To bring food/nourishment,خوراک لانا,467
kh17,"To be happy, to make happy, to look happy",خوش ہونا – کرنا -لگنا,468
kh18,Happiness and Prosperity,خوشحالی ,470
kh19,"Bunch(of grapes etc), ear (of corn)",خوشے,471
kh20,Breach of trust,خیانت کرنا,471
kh21,"Tent, pavilion",خیمہ - سائبان,472
d1,"To enter, to be entered",داخل ہونا - کرنا,473
d2,Superintendent,داروغہ,474
d3,To mark/scar,داغ دینا,475
d4,"slim, lean",دبلا,476
d5,"Prolong, lengthen",دراز ہونا - کرنا,476
d6,Very persistent,در پے ہونا,477
d7,Trees and shrubs,درخت اور پودے,478
d8,"Correct, sound",درست ٹھیک,479
d9,"To correct, rectify",درست کرنا,479
d10,In between,درمیان,480
d11,"Enemy, animosity",دشمن دشمنی,481
d12,To pray for/to,دعا دینا - کرنا,482
d13,Heart,دل,483
d14,Inspiration in the heart,دل میں بات ڈالنا,485
d15,Proof,دلیل,488
d16,Day and its times,دن اور اسکے اوقات,490
d17,Different names for the world,دنیا کے مختلف نام,491
d18,Far away,دور,492
d19,"To distance, to be distanced",دور کرنا - ہونا,493
d20,To run,ڈورنا ,494
d21,Cause to run,ڈورانا,496
d22,Hell and its various names,دوزخ اور اسکے مختلف نام,497
d23,Angels of hell fire,دوزخ کے فرشتے,498
d24,friend,دوست,498
d25,"Drive (dogs out), revile, reprove",دھتکارنا,501
d26,Concealed,دھندلانا,501
d27,Smoke,دھواں,502
d28,Sunshine,دھوپ,503
d29,To deceive,دھوکہ دینا,504
d30,"To see, look ",دیکھنا,505
d31,Various ways of looking,دیکھنا [کیفیت نظر],507
d32,To show/reveal,دکھلانا,508
d33,Religion,دین,509
d34,To give,دینا,511
d35,Wall,دیوار,513
d36,"Lunatic , insanity",دیوانہ- دیوانگی,514
dd1,"To throw, pour, cast away",ڈالنا,516
dd2,"To drown, dip",ڈبونا,517
dd3,To fear,ڈرنا,518
dd4,To frighten,ڈرانا,520
dd5,Bucket,ڈول,522
dd6,Shield,ڈھال,522
dd7,To cover,ڈھانکنا,523
dd8,Setting (ie sun) ,ڈھلنا,524
dd9,To search,ڈھونڈنا,526
dh1,To slaughter,ذبح کرنا,527
dh2,"Means, medium",ذریعہ,528
dh3,disgrace,ذلت,528
dh4,disgraced,ذلیل,529
dh5,To disgrace,ذلیل کرنا,531
dh6,responsibility,ذمہ داری,532
r1,night,رات,533
r2, Actions in the night,رات کے کام,533
r3,"Path, way",راہ - راستہ,534
r4,To establish,راہ ڈالنا –رائج کرنا,537
r5,"To satisfy, to be pleased ",راضی کرنا - ہونا,538
r6,To attain status,رتبہ پانا,539
r7,To face,رخ کرنا,540
r8,Worthless,ردی – نا کارہ,540
r9,Rope,رسسی,542
r10,Relative,رشتہ  دار,542
r11,Approval,رضامندی [خوشنودی],544
r12,To incline,رغبت کرنا,544
r13,"To put, place ",رکھنا,545
r14,Colour,رنگ,546
r15,"Light, to illuminate",روشنی  روشن کرنا - ہونا,546
r16,Fasting person,روزہ دار,549
r17,"To prohibit, stop",روکنا,549
r18,To stop,رکنا,552
r19,To trample,روندنا,553
r20,"Splendor, illumined, resplendent",رونق,554
r21,Sand,ریت,555
z1,surplus,زائد,556
z2,To force,زبردستی کرنا,557
z3,"Wound , gash",زخم,558
z4,Period of time,زمانہ,559
z5,Earth and its varieties,زمین اور اسکی اقسام,560
z6,Sink/collapse into the Earth,زمین بوس ہونا – کرنا ,564
z7,Chains,زنجیریں,565
z8,Bring to live,زندہ کرنا,566
z9,To be live,زندہ ہونا - رہنا,566
z10,"Elegance, beauty, ornaments",زینت,567
s1,Along with,ساتھ,570
s2,companion,ساتھی,570
s3,Year ,سال,571
s4,"Goods, provisions",سامان,573
s5,"To face, appear in front of",سامنے آنا,576
s6,snake,سانپ,577
s7,"All,  whole, entire",سب سارے,578
s8,To entrust,سپرد [حوالے] کرنا,579
s9,truth,سچ,580
s10,hard,سخت,581
s11,hardness,سختی,583
s12,To raise head,سر اٹھانا,584
s13,"Chief , leader",سردار,584
s14,"Cold , winter",سردی,586
s15,Reckless and arrogant,سرکشی کرنا,587
s16,To whisper,سرگوشی کرنا,588
s17,tunnel,سرنگ,588
s18,"To be lazy, procastinate",سستی کرنا,589
s19,To travel,سفر کرنا,590
s20,"to understand, to advise",سمجھنا - سمجھانا,591
s21,To listen,سننا,592
s22,To adorn,سنوارنا,593
s23,"To ride, to mount",سوار ہونا - کرنا,594
s24,except,سوائے,595
s25,To sleep,سونا,596
s26,black,سیاہ سیاہی,598
s27,straight,سیدھا سیدھی,599
s28,Cause to travel,سیر کرانا,601
s29,ladder,سیڑھی,601
s30,"To learn, teach",سیکھنا سیکھانا,602
sh1,branch,شاخ,604
sh2,evening,شام,605
sh3,maybe,شائد,606
sh4,"Beer, wine",شراب ,606
sh5,To be shy,شرمانا,607
sh6, To start,شروع کرنا,608
sh7,Private part,شرمگاہ,609
sh8,"Accomplice, partner",شریک,609
sh9,Flame,شعلہ,610
sh10,"Doubt, suspicion",شک و شبہ,611
sh11,"Shape, figure",شکل و صورت,613
sh12,Give shape,شکل و صورت بنانا,614
sh13,split,شگاف,614
sh14,"Town, city",شہر,615
sh15,glass,شیشہ,616
SA1,"To cleanse, wipe ",صاف کرنا,617
SA2,morning,صبح,618
SA3,Actions related to the  morning,صبح کرنا,618
SA4,To be patient,صبر کرنا,619
SA5,Peace treaty,صلح,620
DA1,guarantor,ضامن,621
TA1,Strength,Taaqat,622
TA2,"Having strength, strong",Taaqat rakhna,623
TA3,Tradition,"Tareeqah, Dastoor",624
TA4,Taunt,Tanah deyna,627
TA5,To put shackles,Thawq dalna,628
TA6,To keep hope,Tama3 rakhna,628
TA7,To decide,Tay karna,629
ZA1,"To become manifest, revealed",ظاہر ہونا,631
ZA2,"To reveal, manifest",ظاہر کرنا,633
E1,"To be helpless, fall short",عاجز آنا,634
E2,To show humility,عاجزی کرنا,634
E3,scholar,عالم ,636
E4,Places of worships,عبادت گاہیں,636
E5,punishment,عزاب – سزا ,637
E6,To give punishment,عزاب دینا,639
E7,Different types of punishments,عزاب کی اقسام,639
E8,Confer honor/ dignity,عزت بخشنا,641
E9,"Honorable, respectable",عزت والا - معزز,642
E10,"Brain, intelligent",عقل - عقلمند,643
E11,To lose his brains,عقل کھودینا,644
E12,women,عورت,645
E13,"Promise , oath",عہد - وعدہ,647
gh1,Cave,غار ,648
gh2,To be neglectful,غافل ہونا – کرنا ,649
gh3,"To become overpowered, to be overpowered,  to overpower, ",غالب آنا  ہونا کرنا,650
gh4,Dust,غبار ,651
gh5,"Anger, temper",غصہ,652
gh6,To enrage,غصۃ دلانا,653
gh7,"Grief, sadness",غم,654
gh8,To be sad,غمگین ہونا,655
gh9,To reflect,غور کرنا,655
f1,"Benefit, to give benefit",فائدہ – فائدہ دینا,658
f2,To conquer,فتح ہونا -دینا,659
f3,Sufficient,فراخی آسودگی ,660
f4,"To be broaden, to make space",فراخ ہونا – کرنا ,661
f5,Angel,فرشتہ,662
f6,Difference,فرق,663
f7,Group of people,فرقہ - گروہ,663
f8,Cry out for assistance ,فریاد رسی,665
f9,To implore,فریاد کرنا,666
f10,"To corrupt, to create problems",فساد کرنا- ڈالنا,666
f11,Useless talk ,فضول باتیں کرنا,667
f12,To spend  excessively,فضول خرچی کرنا,668
f13,To give honour,فضیلت دینا,669
f14,To decree/make a decision,فیصلہ کرنا,669
q1,To gain control,قابو پانا,671
q2,caravan,قافلہ,672
q3,grave,قبر,673
q4,To accept,قبول کرنا,674
q5,"Family,tribe",قبیلہ خاندان,674
q6,To kill,قتل کرنا ,676
q7,step,قدم,677
q8,To have stability,قرار پکڑنا,677
q9,Different names of the Quran,قرآن کے مختلف نام,678
q10,Animal of sacrificeا,قربانی کا جانور,679
q11,To take an oath,قسم اٹھانا,681
q12,To break an oath,قسم توڑنا,682
q13,fort,قلعہ,683
q14,To strengthen,قوت دینا ,684
q15,"Shirt, garment",قمیص,685
q16,Doomsday and its different names,قیامت اور اسکے مختلف نام,685
q17,jail,قید خانہ,687
q18,To imprison,قید کرنا   قیدی بنانا,688
k1,"To cut, ",کاٹنا,689
k2,Cut,کٹنا,691
k3,Paper,کاغز,691
k4,To be enough,کافی ہونا,692
k5,To be of use,کام آنا,692
k6,"Work, To work",کام – کام کرنا,693
k7,To be successful,کامیاب ہونا,695
k8,Ears,کان,696
k9,"To tremble, shiver",کانپنا,697
k10,When,کب,697
k11,Book,کتاب,699
k12,"To dodge, evade",کترا جانا – بچ کر نکل جانا,699
k13,"How much, how many",کتنا کتنے,700
k14,To scratch,کریدنا,700
k15,"Bitter, unpalatable",کڑوا,701
k16,"Peasant, farmer",کسان,701
k17,ship,کشتی جہاز,702
k18,Kaaba and its different names,کعبہ اور اسکے مختلف نام,703
k19,"Yesterday, tomorrow",کل,704
k20," To decrease, ", گھٹانا  کم کرنا کمی کرنا,706
k21,"To earn, ",کمانا – کمائی کرنا,707
k22,Room,کمرہ,707
k23,Weak,کمزور,709
k24,"Edge, brink",کنارہ ,712
k25,Well,کنواں,712
k26,Whip,کوڑا,713
k27,"To endeavor,",کوشش کرنا,713
k28,Who,کون,714
k29,"Anybody, somebody",کوئی,714
k30,"Who , which, that, such as",کہ گویا کہ,715
k31,Where,کہاں,716
k32,"Stories, legends, incidents",کہانیاں  واقعات,716
k33,Skin,کھال,717
k34,To remove the skin,کھال اتارنا,717
k35,Food,کھانا,718
k36,To feed,کھلانا,719
k37,dates,کھجور,720
k38,"To stand, cause to stand",کھڑا ہونا - کرنا,720
k39,To boil,کھولنا,721
k40,To open,کھولنا,722
k41,Fields  of crop,کھیتی,723
k42,To pull,کھینچنا,724
k43,To play,کھیلنا,724
k44,What,کیا,725
k45,How,کیسے,689
k46,"Why, why not",کیوں – کیوں نہ,689
gg1,To pitch/plant,گاڑنا,726
gg2,Passage of time,گردش ایام,727
gg3,Neck,گردن,728
gg4,"To grasp, to arrest",گرفت کرنا,729
gg5,"Heat, to heat, to be hot",گرمی – گرم کرنا- ہونا ,729
gg6,To obtain heat,گرمی حاصل کرنا,731
gg7,"To fall, cause to fall",گرنا - گرانا,731
gg8,To pawn,گروی رکھنا,736
gg9,Ditch,گڑھا,737
gg10,To pass by,گزرنا,738
gg11,neck,گلا,740
gg12,To be lost,گم ہونا,740
gg13,To think/have thoughts,گمان کرنا,741
gg14,Sin,گناہ,742
gg15,Sinful,گنہگار,745
gg16,"Filth, impurity",گند گی نجاست,746
gg17,To count,گننا,747
gg18,Lap,گود,748
gg19,"Deep, deepness",گہرا - گہرائی,748
gg20,Watering place,گھاٹ ,749
gg21,Valley,گھاٹی,750
gg22,House,گھر,750
gg23,Time,گھڑی,752
gg24,Enter by force,گھسنا,753
gg25,To drag,گھسیٹنا,753
gg26,horse,گھوڑا,754
gg27,To surround,گھیرنا,755
l1,"Stick, staff",لاٹھی,757
l2,To bring,لانا,757
l3,To be capable,لائق ہونا,758
l4,"To coil , enwrap",لپیٹنا لپٹنا,760
l5,"To hang, dangle",لٹکنا لٹکانا,761
l6,To regard,لحاظ رکھنا,762
l7,Army,لشکر,762
l8,Wood,لکڑی,764
l9,To write,لکھنا,764
l10,Cause to write,لکھوانا,765
l11,Writers,لکھنے والے,765
l12,Continuous,لگاتار پے در پے,766
l13,To return,لوٹانا لوٹنا  رجوع کرنا,768
l14,Divine tablet recording and its various names,لوح محفوظ اور اسکے مختلف نام,771
l15,"Maid, servant",لونڈی  غلام ,772
l16,To take,لینا,773
l17,To be involved in transactions,لین دین کرنا,774
m1,"To hit, beat, whip, stone",مارنا,775
m2,"To kill, to die",مار ڈالنا - مرنا,776
m3,Goods wealth,مال و دولت,779
m4,Owner,مالک,781
m5,Mother,ماں,782
m6,"To ask, beg",مانگنا,783
m7,To erase,مٹانا,784
m8,Soil and its different stages,مٹی اور اسکی مختلف حالتیں,785
m9,"To copulate, intercourse",مجامعت کرنا,787
m10,"Organization, meeting",مجلس,788
m11,Fish,مچھلی,789
m12,Love – to love,محبت -  کرنا,789
m13,Palace,محل,790
m14,"To work hard, to endure hardship",محنت کرنا – مشقت اٹھانا,791
m15,To actively oppose,مخالفت کرنا,793
m16,"Different, various",مختلف,794
m17,"Time, length of time",مدت,795
m18,"To help, assist, to wish for help",مدد دینا – کرنا - چاہنا,797
m19,helper,مدد گار,799
m20,To ridicule,مزاق اڑانا,801
m21,man,مرد,802
m22,Taste,مزا ,803
m23,"To adorn, decorate",مزین کرنا,804
m24,traveller,مسافر,805
m25,To harness,مسخر کرنا,806
m26,To subdued,مسلط کرنا,807
m27,To be busy,مشغول ہونا - ,807
m28,To put in hardship,مشقت میں ڈالنا,809
m29,To consult,مشورہ کرنا,809
m30,To make famous,مشہور کرنا,810
m31,"Strong, fixed",مضبوط ,812
m32,"To make it firm, strong",مضبوط بنانا - کرنا,813
m33,"To forgive, pardon",معاف کرنا  بخشنا درگزر کرنا,816
m34,Deity,معبود,818
m35,Status and capacity,مقدور - حیثیت,819
m36,"To appoint, ",مقرر کرنا,820
m37,fly,مکھی,821
m38,To meet,ملنا,821
m39,"To join, mix, blend ",ملانا,823
m40,To turn your face away,منہ پھیرنا,826
m41,To agree,موافقت کرنا,827
m42,"To bend, turn",موڑنا,828
m43,Merciful,مہربان,828
m44,"To stamp, to put a seal",مہر لگانا,830
m45,"To give time, reprieve",مہلت دینا,830
m46,Visitor,مہمان,831
m47,Months,مہینے,832
m48,"Peg, nail",میخ,832
n1,To be hopeless,نا امید ہونا,834
n2,"Impure, polluted, ",ناپاک,835
n3,Disliked thing,ناپسندیدہ,836
n4,"Ignorant, naive",نادان,837
n5,Upset and angry,ناراضگی,838
n6,Ungrateful,ناشکرا,839
n7,To disobey,نافرمانی کرنا,839
n8,Nose,ناک,840
n9,"Name, to keep a name",نام - رکھنا,840
n10,Inauspicious,نامبارک,842
n11,To be liberated,نجات پانا,842
n12,Gifts and oblations,نذر و نیاز,843
n13,"To be soft, soften",نرم ہونا - کرنا,844
n14,"To be near, to make it close",نزدیک ہونا - کرنا,845
n15,sign,نشانی,847
n16,To place an emblem,نشان لگانا,850
n17,"Advice, to give , to attain",نصیحت – کرنا – حاصل کرنا,850
n18,"Grace, divine blessings",نعمت,852
n19,To give blessings,نعمت عطا کرنا,853
n20,"To have loss, incur loss",نقصان ہونا - اٹھانا,854
n21,"To marry, marry off",نکاح کرنا - کرانا,855
n22,To come out,نکلنا,856
n23,To take out,نکالنا,858
n24,"Glance, sight",نگاہ,858
n25,watchman,نگہبان,859
n26,To swallow,نگلنا,860
n27,To wash,نہانا -دھونا,862
n28,"No, nay",نہیں,862
n29,"New , to be fresh",نیا – نیا ہونا,864
n30,"Under, lowest",نیچے,865
n31,To lower,نیچے [پست ] کرنا,866
n32,"Pious, virtuous",نیک  نیکبخت,867
n33,"Good, piety",نیکی – نیک کام,869
n34,"To do good, ",نیکی کرنا,870
w1,plentiful,وافر- بہت,871
w2,The ones of/the people of ,والا-  والے,873
w3,inheritance,وراثت,874
w4,time,وقت,875
h1,"Hand, either right hand or left hand, arm",ہاتھ,878
h2,yes,ہاں,880
h3,To pant,ہانپنا,881
h4,To remove,ہٹانا,881
h5,"To receive guidance, to give guidance",ہدایت دینا پانا,883
h6,destruction,ہلاکت,884
h7,"To be perished, to destroy",ہلاک ہونا - کرنا,885
h8,"To be light(in weight), to make light",ہلکا ہونا - کرنا,888
h9,"To move, to shake ",ہلنا - ہلانا,889
h10,Congruence ,ہم آہنگی - ہونا,890
h11,To lose heart,ہمت ہارنا,892
h12,To make level,ہموار کرنا,892
h13,Always,ہمیشہ,893
h14,To remain always,ہمیشہ ہونا - رہنا,894
h15,To laugh,ہنسنا,896
h16,Wind  and its different types,ہوا اور اسکی اقسام,897
h17,To happen,ہونا,900
y1,or,یا,902
y2,To remember,یاد کرنا – آنا - رکھنا,902
y3,"To belief, to have faith",یقین کرنا,903
y4,To have complete devotion,یکسو ہونا,904

