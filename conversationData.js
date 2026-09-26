const conversationData = [
  /* What */
  {
    unit: "What",
    question: "What do you want?",
    questionJa: "何がほしいですか？",
    pattern: "I want",
    answerType: "thing",
    example: "I want a ball."
  },
  {
    unit: "What",
    question: "What do you like?",
    questionJa: "何が好きですか？",
    pattern: "I like",
    answerType: "thing",
    example: "I like soccer."
  },
  {
    unit: "What",
    question: "What do you do after school?",
    questionJa: "放課後に何をしますか？",
    pattern: "I",
    answerType: "thing",
    example: "I play soccer."
  },
  {
    unit: "What",
    question: "What is your favorite food?",
    questionJa: "好きな食べ物は何ですか？",
    pattern: "My favorite food is",
    answerType: "thing",
    example: "My favorite food is pizza."
  },
  {
    unit: "What",
    question: "What sport do you like?",
    questionJa: "どんなスポーツが好きですか？",
    pattern: "I like",
    answerType: "thing",
    example: "I like soccer."
  },
  {
    unit: "What",
    question: "What do you eat for breakfast?",
    questionJa: "朝ごはんに何を食べますか？",
    pattern: "I eat",
    answerType: "thing",
    example: "I eat bread for breakfast."
  },
  {
    unit: "What",
    question: "What do you drink in the morning?",
    questionJa: "朝に何を飲みますか？",
    pattern: "I drink",
    answerType: "thing",
    example: "I drink water in the morning."
  },
  {
    unit: "What",
    question: "What do you read?",
    questionJa: "何を読みますか？",
    pattern: "I read",
    answerType: "thing",
    example: "I read books."
  },
  {
    unit: "What",
    question: "What do you watch on TV?",
    questionJa: "テレビで何を見ますか？",
    pattern: "I watch",
    answerType: "thing",
    example: "I watch sports on TV."
  },
  {
    unit: "What",
    question: "What do you listen to?",
    questionJa: "何を聞きますか？",
    pattern: "I listen to",
    answerType: "thing",
    example: "I listen to music."
  },
  {
    unit: "What",
    question: "What do you study?",
    questionJa: "何を勉強しますか？",
    pattern: "I study",
    answerType: "thing",
    example: "I study English."
  },
  {
    unit: "What",
    question: "What do you practice?",
    questionJa: "何を練習しますか？",
    pattern: "I practice",
    answerType: "thing",
    example: "I practice dancing."
  },
  {
    unit: "What",
    question: "What do you do after dinner?",
    questionJa: "夕食後に何をしますか？",
    pattern: "I",
    answerType: "thing",
    example: "I do my homework after dinner."
  },
  {
    unit: "What",
    question: "What do you do on weekends?",
    questionJa: "週末に何をしますか？",
    pattern: "I",
    answerType: "thing",
    example: "I play soccer on weekends."
  },
  {
    unit: "What",
    question: "What do you want to buy?",
    questionJa: "何を買いたいですか？",
    pattern: "I want to buy",
    answerType: "thing",
    example: "I want to buy a new bag."
  },
  {
    unit: "What",
    question: "What do you want to eat?",
    questionJa: "何を食べたいですか？",
    pattern: "I want to eat",
    answerType: "thing",
    example: "I want to eat pizza."
  },
  {
    unit: "What",
    question: "What do you want to drink?",
    questionJa: "何を飲みたいですか？",
    pattern: "I want to drink",
    answerType: "thing",
    example: "I want to drink juice."
  },
  {
    unit: "What",
    question: "What do you like to eat?",
    questionJa: "何を食べるのが好きですか？",
    pattern: "I like to eat",
    answerType: "thing",
    example: "I like to eat sushi."
  },
  {
    unit: "What",
    question: "What do you like to do?",
    questionJa: "何をするのが好きですか？",
    pattern: "I like to",
    answerType: "thing",
    example: "I like to dance."
  },
  {
    unit: "What",
    question: "What do you enjoy?",
    questionJa: "何を楽しみますか？",
    pattern: "I enjoy",
    answerType: "thing",
    example: "I enjoy dancing."
  },

  /* Where */
  {
    unit: "Where",
    question: "Where do you live?",
    questionJa: "どこに住んでいますか？",
    pattern: "I live",
    answerType: "place",
    example: "I live in Fukuoka."
  },
  {
    unit: "Where",
    question: "Where do you go to school?",
    questionJa: "どこに通っていますか？",
    pattern: "I go to school",
    answerType: "place",
    example: "I go to school in Fukuoka."
  },
  {
    unit: "Where",
    question: "Where do you practice dancing?",
    questionJa: "どこでダンスの練習をしますか？",
    pattern: "I practice dancing",
    answerType: "place",
    example: "I practice dancing at school."
  },
  {
    unit: "Where",
    question: "Where do you want to go?",
    questionJa: "どこに行きたいですか？",
    pattern: "I want to go",
    answerType: "place",
    example: "I want to go to the park."
  },
  {
    unit: "Where",
    question: "Where is your school?",
    questionJa: "あなたの学校はどこですか？",
    pattern: "My school is",
    answerType: "place",
    example: "My school is in Fukuoka."
  },
  {
    unit: "Where",
    question: "Where do you eat lunch?",
    questionJa: "どこで昼食を食べますか？",
    pattern: "I eat lunch",
    answerType: "place",
    example: "I eat lunch at school."
  },
  {
    unit: "Where",
    question: "Where do you study?",
    questionJa: "どこで勉強しますか？",
    pattern: "I study",
    answerType: "place",
    example: "I study at home."
  },
  {
    unit: "Where",
    question: "Where do you read books?",
    questionJa: "どこで本を読みますか？",
    pattern: "I read books",
    answerType: "place",
    example: "I read books at home."
  },
  {
    unit: "Where",
    question: "Where do you watch TV?",
    questionJa: "どこでテレビを見ますか？",
    pattern: "I watch TV",
    answerType: "place",
    example: "I watch TV at home."
  },
  {
    unit: "Where",
    question: "Where do you listen to music?",
    questionJa: "どこで音楽を聞きますか？",
    pattern: "I listen to music",
    answerType: "place",
    example: "I listen to music in my room."
  },
  {
    unit: "Where",
    question: "Where do you play soccer?",
    questionJa: "どこでサッカーをしますか？",
    pattern: "I play soccer",
    answerType: "place",
    example: "I play soccer at school."
  },
  {
    unit: "Where",
    question: "Where do you swim?",
    questionJa: "どこで泳ぎますか？",
    pattern: "I swim",
    answerType: "place",
    example: "I swim at the pool."
  },
  {
    unit: "Where",
    question: "Where do you run?",
    questionJa: "どこで走りますか？",
    pattern: "I run",
    answerType: "place",
    example: "I run in the park."
  },
  {
    unit: "Where",
    question: "Where do you walk?",
    questionJa: "どこを歩きますか？",
    pattern: "I walk",
    answerType: "place",
    example: "I walk in the park."
  },
  {
    unit: "Where",
    question: "Where do you buy food?",
    questionJa: "どこで食べ物を買いますか？",
    pattern: "I buy food",
    answerType: "place",
    example: "I buy food at the supermarket."
  },
  {
    unit: "Where",
    question: "Where do you cook?",
    questionJa: "どこで料理をしますか？",
    pattern: "I cook",
    answerType: "place",
    example: "I cook at home."
  },
  {
    unit: "Where",
    question: "Where do you sleep?",
    questionJa: "どこで寝ますか？",
    pattern: "I sleep",
    answerType: "place",
    example: "I sleep in my room."
  },
  {
    unit: "Where",
    question: "Where do you brush your teeth?",
    questionJa: "どこで歯をみがきますか？",
    pattern: "I brush my teeth",
    answerType: "place",
    example: "I brush my teeth in the bathroom."
  },
  {
    unit: "Where",
    question: "Where do you take a bath?",
    questionJa: "どこでお風呂に入りますか？",
    pattern: "I take a bath",
    answerType: "place",
    example: "I take a bath at home."
  },

  /* When */
  {
    unit: "When",
    question: "When do you get up?",
    questionJa: "いつ起きますか？",
    pattern: "I get up",
    answerType: "time",
    example: "I get up at seven."
  },
  {
    unit: "When",
    question: "When do you go to school?",
    questionJa: "いつ学校に行きますか？",
    pattern: "I go to school",
    answerType: "time",
    example: "I go to school at eight."
  },
  {
    unit: "When",
    question: "When do you practice dancing?",
    questionJa: "いつダンスの練習をしますか？",
    pattern: "I practice dancing",
    answerType: "time",
    example: "I practice dancing after school."
  },
  {
    unit: "When",
    question: "When do you study English?",
    questionJa: "いつ英語を勉強しますか？",
    pattern: "I study English",
    answerType: "time",
    example: "I study English in the evening."
  },
  {
    unit: "When",
    question: "When do you go to bed?",
    questionJa: "いつ寝ますか？",
    pattern: "I go to bed",
    answerType: "time",
    example: "I go to bed at ten."
  },
  {
    unit: "When",
    question: "When do you eat breakfast?",
    questionJa: "いつ朝ごはんを食べますか？",
    pattern: "I eat breakfast",
    answerType: "time",
    example: "I eat breakfast at seven."
  },
  {
    unit: "When",
    question: "When do you eat dinner?",
    questionJa: "いつ夕食を食べますか？",
    pattern: "I eat dinner",
    answerType: "time",
    example: "I eat dinner at seven."
  },
  {
    unit: "When",
    question: "When do you study?",
    questionJa: "いつ勉強しますか？",
    pattern: "I study",
    answerType: "time",
    example: "I study in the evening."
  },
  {
    unit: "When",
    question: "When do you read books?",
    questionJa: "いつ本を読みますか？",
    pattern: "I read books",
    answerType: "time",
    example: "I read books at night."
  },
  {
    unit: "When",
    question: "When do you watch TV?",
    questionJa: "いつテレビを見ますか？",
    pattern: "I watch TV",
    answerType: "time",
    example: "I watch TV after dinner."
  },
  {
    unit: "When",
    question: "When do you listen to music?",
    questionJa: "いつ音楽を聞きますか？",
    pattern: "I listen to music",
    answerType: "time",
    example: "I listen to music at night."
  },
  {
    unit: "When",
    question: "When do you do your homework?",
    questionJa: "いつ宿題をしますか？",
    pattern: "I do my homework",
    answerType: "time",
    example: "I do my homework after dinner."
  },
  {
    unit: "When",
    question: "When do you play soccer?",
    questionJa: "いつサッカーをしますか？",
    pattern: "I play soccer",
    answerType: "time",
    example: "I play soccer on Sunday."
  },
  {
    unit: "When",
    question: "When do you swim?",
    questionJa: "いつ泳ぎますか？",
    pattern: "I swim",
    answerType: "time",
    example: "I swim on Saturday."
  },
  {
    unit: "When",
    question: "When do you take a bath?",
    questionJa: "いつお風呂に入りますか？",
    pattern: "I take a bath",
    answerType: "time",
    example: "I take a bath at eight."
  },
  {
    unit: "When",
    question: "When do you practice English?",
    questionJa: "いつ英語を練習しますか？",
    pattern: "I practice English",
    answerType: "time",
    example: "I practice English after school."
  },
  {
    unit: "When",
    question: "When do you come home?",
    questionJa: "いつ家に帰ってきますか？",
    pattern: "I come home",
    answerType: "time",
    example: "I come home at five."
  },
  {
    unit: "When",
    question: "When does school start?",
    questionJa: "いつ学校が始まりますか？",
    pattern: "School starts",
    answerType: "time",
    example: "School starts at eight."
  }
];
  /* Yes / No */
  {
    unit: "Yes / No",
    question: "Do you have a pet?",
    questionJa: "ペットを飼っていますか？",
    pattern: "I have",
    answerType: "thing",
    example: "I have a dog."
  },
  {
    unit: "Yes / No",
    question: "Do you have a brother?",
    questionJa: "兄弟がいますか？",
    pattern: "I have",
    answerType: "thing",
    example: "I have a brother."
  },
  {
    unit: "Yes / No",
    question: "Do you visit your grandparents?",
    questionJa: "祖父母を訪ねますか？",
    pattern: "I visit",
    answerType: "thing",
    example: "I visit my grandparents."
  },
  {
    unit: "Yes / No",
    question: "Do you ride a bike?",
    questionJa: "自転車に乗りますか？",
    pattern: "I ride",
    answerType: "thing",
    example: "I ride a bike."
  },
  {
    unit: "Yes / No",
    question: "Do you take a bus to school?",
    questionJa: "学校へバスで行きますか？",
    pattern: "I take",
    answerType: "thing",
    example: "I take a bus to school."
  },
  {
    unit: "Yes / No",
    question: "Do you help your family?",
    questionJa: "家族を手伝いますか？",
    pattern: "I help",
    answerType: "thing",
    example: "I help my family."
  },
  {
    unit: "Yes / No",
    question: "Do you clean your room?",
    questionJa: "自分の部屋を掃除しますか？",
    pattern: "I clean",
    answerType: "thing",
    example: "I clean my room."
  },
  {
    unit: "Yes / No",
    question: "Do you cook dinner?",
    questionJa: "夕食を作りますか？",
    pattern: "I cook",
    answerType: "thing",
    example: "I cook dinner."
  },
  {
    unit: "Yes / No",
    question: "Do you wash your hands?",
    questionJa: "手を洗いますか？",
    pattern: "I wash",
    answerType: "thing",
    example: "I wash my hands."
  },
  {
    unit: "Yes / No",
    question: "Do you use a computer?",
    questionJa: "コンピューターを使いますか？",
    pattern: "I use",
    answerType: "thing",
    example: "I use a computer."
  },
  {
    unit: "Yes / No",
    question: "Do you speak English?",
    questionJa: "英語を話しますか？",
    pattern: "I speak",
    answerType: "thing",
    example: "I speak English."
  },
  {
    unit: "Yes / No",
    question: "Do you talk with your friends every day?",
    questionJa: "毎日友達と話しますか？",
    pattern: "I talk",
    answerType: "thing",
    example: "I talk with my friends every day."
  },
  {
    unit: "Yes / No",
    question: "Do you write in a notebook?",
    questionJa: "ノートに書きますか？",
    pattern: "I write",
    answerType: "thing",
    example: "I write in a notebook."
  },
  {
    unit: "Yes / No",
    question: "Do you sing?",
    questionJa: "歌いますか？",
    pattern: "I sing",
    answerType: "thing",
    example: "I sing at school."
  },
  {
    unit: "Yes / No",
    question: "Do you dance?",
    questionJa: "ダンスをしますか？",
    pattern: "I dance",
    answerType: "thing",
    example: "I dance every day."
  },
  {
    unit: "Yes / No",
    question: "Do you swim?",
    questionJa: "泳ぎますか？",
    pattern: "I swim",
    answerType: "thing",
    example: "I swim on weekends."
  },
  {
    unit: "Yes / No",
    question: "Do you hike?",
    questionJa: "ハイキングをしますか？",
    pattern: "I hike",
    answerType: "thing",
    example: "I hike with my family."
  },
  {
    unit: "Yes / No",
    question: "Do you camp?",
    questionJa: "キャンプをしますか？",
    pattern: "I camp",
    answerType: "thing",
    example: "I camp with my family."
  },
  {
    unit: "Yes / No",
    question: "Do you ski?",
    questionJa: "スキーをしますか？",
    pattern: "I ski",
    answerType: "thing",
    example: "I ski in winter."
  },
  {
    unit: "Yes / No",
    question: "Do you skate?",
    questionJa: "スケートをしますか？",
    pattern: "I skate",
    answerType: "thing",
    example: "I skate in winter."
  },

  /* Yes / No - more */
  {
    unit: "Yes / No",
    question: "Do you know this song?",
    questionJa: "この歌を知っていますか？",
    pattern: "I know",
    answerType: "thing",
    example: "I know this song."
  },
  {
    unit: "Yes / No",
    question: "Do you need help?",
    questionJa: "助けが必要ですか？",
    pattern: "I need",
    answerType: "thing",
    example: "I need help."
  },
  {
    unit: "Yes / No",
    question: "Do you love animals?",
    questionJa: "動物が大好きですか？",
    pattern: "I love",
    answerType: "thing",
    example: "I love animals."
  },
  {
    unit: "Yes / No",
    question: "Do you enjoy music?",
    questionJa: "音楽を楽しみますか？",
    pattern: "I enjoy",
    answerType: "thing",
    example: "I enjoy music."
  },
  {
    unit: "Yes / No",
    question: "Do you think English is fun?",
    questionJa: "英語は楽しいと思いますか？",
    pattern: "I think",
    answerType: "thing",
    example: "I think English is fun."
  },
  {
    unit: "Yes / No",
    question: "Do you wait for the bus?",
    questionJa: "バスを待ちますか？",
    pattern: "I wait",
    answerType: "thing",
    example: "I wait for the bus."
  },
  {
    unit: "Yes / No",
    question: "Do you meet your friends on weekends?",
    questionJa: "週末に友達に会いますか？",
    pattern: "I meet",
    answerType: "thing",
    example: "I meet my friends on weekends."
  },
  {
    unit: "Yes / No",
    question: "Do you learn English at school?",
    questionJa: "学校で英語を習いますか？",
    pattern: "I learn",
    answerType: "thing",
    example: "I learn English at school."
  },
  {
    unit: "Yes / No",
    question: "Do you practice every day?",
    questionJa: "毎日練習しますか？",
    pattern: "I practice",
    answerType: "thing",
    example: "I practice every day."
  },
  {
    unit: "Yes / No",
    question: "Do you paint pictures?",
    questionJa: "絵を描きますか？",
    pattern: "I paint",
    answerType: "thing",
    example: "I paint pictures."
  },

  /* Are you ...? */
  {
    unit: "Yes / No",
    question: "Are you tired?",
    questionJa: "疲れていますか？",
    pattern: "I am",
    answerType: "thing",
    example: "I am tired."
  },
  {
    unit: "Yes / No",
    question: "Are you busy?",
    questionJa: "忙しいですか？",
    pattern: "I am",
    answerType: "thing",
    example: "I am busy."
  },
  {
    unit: "Yes / No",
    question: "Are you happy?",
    questionJa: "うれしいですか？",
    pattern: "I am",
    answerType: "thing",
    example: "I am happy."
  },
  {
    unit: "Yes / No",
    question: "Are you hungry?",
    questionJa: "おなかがすいていますか？",
    pattern: "I am",
    answerType: "thing",
    example: "I am hungry."
  },
  {
    unit: "Yes / No",
    question: "Are you ready?",
    questionJa: "準備はできていますか？",
    pattern: "I am",
    answerType: "thing",
    example: "I am ready."
  },

  /* Is it ...? */
  {
    unit: "Yes / No",
    question: "Is it cold today?",
    questionJa: "今日は寒いですか？",
    pattern: "It is",
    answerType: "thing",
    example: "It is cold today."
  },
  {
    unit: "Yes / No",
    question: "Is it hot today?",
    questionJa: "今日は暑いですか？",
    pattern: "It is",
    answerType: "thing",
    example: "It is hot today."
  },
  {
    unit: "Yes / No",
    question: "Is it sunny today?",
    questionJa: "今日は晴れていますか？",
    pattern: "It is",
    answerType: "thing",
    example: "It is sunny today."
  },
  {
    unit: "Yes / No",
    question: "Is it raining?",
    questionJa: "雨が降っていますか？",
    pattern: "It is",
    answerType: "thing",
    example: "It is raining."
  },

  /* Can you ...? */
  {
    unit: "Yes / No",
    question: "Can you swim?",
    questionJa: "泳げますか？",
    pattern: "I can",
    answerType: "thing",
    example: "I can swim."
  },
  {
    unit: "Yes / No",
    question: "Can you ski?",
    questionJa: "スキーができますか？",
    pattern: "I can",
    answerType: "thing",
    example: "I can ski."
  },
  {
    unit: "Yes / No",
    question: "Can you sing?",
    questionJa: "歌えますか？",
    pattern: "I can",
    answerType: "thing",
    example: "I can sing."
  },
  {
    unit: "Yes / No",
    question: "Can you speak English?",
    questionJa: "英語を話せますか？",
    pattern: "I can",
    answerType: "thing",
    example: "I can speak English."
  },
  {
    unit: "Yes / No",
    question: "Can you ride a bike?",
    questionJa: "自転車に乗れますか？",
    pattern: "I can",
    answerType: "thing",
    example: "I can ride a bike."
  }
