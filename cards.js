/**
 * 영어 플래시카드 (BLACKUP COFFEE · 스페셜티 커피 로스터의 일·생활 영어)
 * difficulty: "아주쉬움" | "쉬움" | "어려움" | "아주어려움"
 * topics: 일상 | 직장 | 커피 | 여행 | 음식 | 감정 | 문화 | 시사 | 관용구 | 격식 | 멜버른
 *
 * front = meaningKo (한국어)
 * back  = casualUS (미국식 구어체) / formalEn (격식체·문어체) / casualUK (영국식 구어체)
 * index.html 의 EMBEDDED_CARDS 와 동일하게 유지하세요.
 */
window.TOPICS = [
  {
    "id": "일상",
    "label": "일상"
  },
  {
    "id": "직장",
    "label": "직장·비즈니스"
  },
  {
    "id": "커피",
    "label": "커피·카페"
  },
  {
    "id": "여행",
    "label": "여행"
  },
  {
    "id": "음식",
    "label": "음식"
  },
  {
    "id": "감정",
    "label": "감정"
  },
  {
    "id": "문화",
    "label": "문화"
  },
  {
    "id": "시사",
    "label": "시사"
  },
  {
    "id": "관용구",
    "label": "관용구"
  },
  {
    "id": "격식",
    "label": "격식"
  },
  {
    "id": "멜버른",
    "label": "멜버른 행사"
  }
];

window.FLASHCARDS = [
  {
    "id": 1,
    "topics": [
      "일상"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "오늘 아침엔 커피 내리기 전에 잠깐 산책 좀 했어.",
    "casualUS": "I went for a quick walk this morning before I made coffee.",
    "formalEn": "This morning, I took a brief walk before brewing my coffee.",
    "casualUK": "I nipped out for a quick walk this morning before making a coffee.",
    "notes": "nip out = 영국 구어 '잠깐 나갔다 오다'"
  },
  {
    "id": 2,
    "topics": [
      "일상"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "퇴근하고 장 좀 보고 갈게. 뭐 필요한 거 있어?",
    "casualUS": "I'm gonna grab some groceries on my way home. Need anything?",
    "formalEn": "I will stop by the supermarket on my way home. Is there anything you need?",
    "casualUK": "I'll pop to the shops on the way home. Do you need anything?",
    "notes": "pop to the shops = 영국 구어 '가게에 잠깐 들르다'"
  },
  {
    "id": 3,
    "topics": [
      "일상"
    ],
    "difficulty": "쉬움",
    "meaningKo": "요즘 새벽 로스팅 때문에 잠이 너무 부족해.",
    "casualUS": "I've been roasting at the crack of dawn lately, so I'm running on fumes.",
    "formalEn": "Owing to early-morning roasting sessions, I have not been getting sufficient sleep recently.",
    "casualUK": "I've been roasting at silly o'clock lately, so I'm absolutely knackered.",
    "notes": "running on fumes(미) · silly o'clock / knackered(영: 말도 안 되게 이른 시간 / 녹초가 된)"
  },
  {
    "id": 4,
    "topics": [
      "일상"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이번 주말엔 아무것도 안 하고 집에서 푹 쉬고 싶어.",
    "casualUS": "This weekend I just wanna stay home and chill.",
    "formalEn": "This weekend, I would like to stay at home and get some proper rest.",
    "casualUK": "This weekend I just want to stay in and put my feet up.",
    "notes": "put one's feet up = 영국에서 흔한 '느긋하게 쉬다'"
  },
  {
    "id": 5,
    "topics": [
      "일상"
    ],
    "difficulty": "쉬움",
    "meaningKo": "택배 기사님이 문 앞에 두고 가셨대. 이따 확인해 볼게.",
    "casualUS": "The delivery driver said they left it at the front door. I'll check in a bit.",
    "formalEn": "The courier has informed me that the parcel was left at the front door. I will check on it shortly.",
    "casualUK": "The courier said they've left it on the doorstep. I'll have a look in a bit."
  },
  {
    "id": 6,
    "topics": [
      "일상"
    ],
    "difficulty": "어려움",
    "meaningKo": "관리비가 또 올라서 이번 달 가계부를 다시 짜야 할 것 같아.",
    "casualUS": "Our maintenance fees went up again, so I need to redo this month's budget.",
    "formalEn": "As the building maintenance fees have risen again, I will need to revise this month's household budget.",
    "casualUK": "The service charge has gone up again, so I'll have to redo the budget this month.",
    "notes": "관리비: 미국 maintenance/HOA fees · 영국 service charge"
  },
  {
    "id": 7,
    "topics": [
      "일상"
    ],
    "difficulty": "어려움",
    "meaningKo": "병원 예약을 계속 미뤘는데, 더 이상은 안 미루려고.",
    "casualUS": "I've been putting off my doctor's appointment, but I'm not gonna push it back anymore.",
    "formalEn": "I have postponed my medical appointment several times, but I do not intend to delay it any further.",
    "casualUK": "I've been putting off going to the GP, but I'm not going to leave it any longer.",
    "notes": "GP = 영국의 동네 주치의(일반의)"
  },
  {
    "id": 8,
    "topics": [
      "일상"
    ],
    "difficulty": "어려움",
    "meaningKo": "매장 오픈 준비하느라 정신없어서 끼니를 대충 때웠어.",
    "casualUS": "I was so slammed getting the shop ready to open that I just grabbed a quick bite.",
    "formalEn": "I was so occupied preparing the shop for opening that I only managed a hurried meal.",
    "casualUK": "I was run off my feet getting the shop ready, so I just grabbed something on the go.",
    "notes": "slammed(미: 엄청 바쁜) · run off my feet(영: 눈코 뜰 새 없는)"
  },
  {
    "id": 9,
    "topics": [
      "일상"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "일과 삶의 균형을 맞추려고 일요일엔 일부러 휴대폰 알림을 꺼 둬.",
    "casualUS": "To keep some kind of work-life balance, I make a point of turning off my notifications on Sundays.",
    "formalEn": "In order to maintain a healthy work-life balance, I deliberately disable my phone notifications on Sundays.",
    "casualUK": "To keep some sort of work-life balance, I make a point of switching my notifications off on Sundays.",
    "notes": "make a point of -ing = 일부러(꼭) ~하다"
  },
  {
    "id": 10,
    "topics": [
      "일상"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "건강검진 결과가 애매하게 나와서 재검을 받아야 한대. 괜히 신경 쓰이네.",
    "casualUS": "My checkup results came back kind of borderline, so they want me to get retested. It's been bugging me.",
    "formalEn": "My health screening results were inconclusive, so I have been asked to undergo a follow-up test. I must admit it has been weighing on my mind.",
    "casualUK": "My check-up results were a bit borderline, so they want me back for another test. It's been niggling at me.",
    "notes": "niggle = 영국 구어 '(작은 걱정이) 자꾸 신경 쓰이다'"
  },
  {
    "id": 11,
    "topics": [
      "직장"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "회의를 몇 시로 옮길까요? 저는 오후가 좋아요.",
    "casualUS": "What time should we move the meeting to? Afternoons work better for me.",
    "formalEn": "To what time would you like to reschedule the meeting? The afternoon would suit me better.",
    "casualUK": "What time shall we move the meeting to? Afternoons are better for me.",
    "notes": "shall we ~? = 영국에서 훨씬 자주 쓰는 제안 표현"
  },
  {
    "id": 12,
    "topics": [
      "직장"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "견적서는 오늘 중으로 보내 드릴게요.",
    "casualUS": "I'll send you the quote by end of day.",
    "formalEn": "I will send you the quotation by the end of today.",
    "casualUK": "I'll get the quote over to you by the end of the day.",
    "notes": "by end of day(EOD) = 미국 비즈니스 구어"
  },
  {
    "id": 13,
    "topics": [
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이번 달 온라인 주문이 지난달보다 20% 늘었어.",
    "casualUS": "Online orders are up 20% from last month.",
    "formalEn": "Online orders this month have increased by 20% compared with last month.",
    "casualUK": "Online orders are up 20% on last month.",
    "notes": "up 20% on last month = 영국식 비교 (미국은 from/over)"
  },
  {
    "id": 14,
    "topics": [
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "새로 온 직원한테 포장이랑 출고 과정을 알려 줘야 해.",
    "casualUS": "I need to show the new hire how we pack and ship orders.",
    "formalEn": "I need to train our new employee on the packing and dispatch process.",
    "casualUK": "I need to show the new starter how we pack and send out orders.",
    "notes": "new hire(미) · new starter(영) = 신입"
  },
  {
    "id": 15,
    "topics": [
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이 건은 제가 확인하고 다시 연락드릴게요.",
    "casualUS": "Let me look into this and circle back with you.",
    "formalEn": "I will look into this matter and get back to you shortly.",
    "casualUK": "Leave it with me and I'll get back to you.",
    "notes": "circle back(미 비즈니스 구어) · leave it with me(영: 제게 맡겨 주세요)"
  },
  {
    "id": 16,
    "topics": [
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "주문하신 원두를 분쇄하지 않고 보내 드려서 죄송해요. 바로 분쇄해서 다시 보내 드릴게요.",
    "casualUS": "So sorry, we sent your beans whole instead of ground! We'll grind a fresh bag and ship it right out.",
    "formalEn": "We apologize for sending your coffee as whole beans rather than ground. A freshly ground replacement will be sent to you right away.",
    "casualUK": "Really sorry, we sent your coffee as whole beans rather than ground! We'll grind a fresh bag and pop it in the post straight away.",
    "notes": "pop it in the post = 영국 구어 '우편으로 부치다'"
  },
  {
    "id": 17,
    "topics": [
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "납품 단가를 조금 조정해야 할 것 같아요. 생두 가격이 많이 올랐거든요.",
    "casualUS": "We might need to adjust our wholesale prices a bit. Green coffee prices have gone way up.",
    "formalEn": "We may need to adjust our wholesale prices slightly, as green coffee prices have risen considerably.",
    "casualUK": "We might have to tweak our wholesale prices a bit. Green coffee's gone up loads.",
    "notes": "loads = 영국 구어 '엄청, 많이'"
  },
  {
    "id": 18,
    "topics": [
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "재고가 거의 바닥이라 다음 주 로스팅 일정을 앞당겨야겠어.",
    "casualUS": "We're almost out of stock, so I need to move up next week's roasting schedule.",
    "formalEn": "As our inventory is running low, I will need to bring forward next week's roasting schedule.",
    "casualUK": "We're running low on stock, so I'll have to bring next week's roasts forward.",
    "notes": "move up(미) · bring forward(영) = 일정을 앞당기다"
  },
  {
    "id": 19,
    "topics": [
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "스마트스토어랑 자사몰 주문이 한꺼번에 몰려서 출고가 하루 밀렸어.",
    "casualUS": "Orders from Smart Store and our own site all came in at once, so shipping got pushed back a day.",
    "formalEn": "Owing to a simultaneous surge in orders from Smart Store and our online shop, dispatch has been delayed by one day.",
    "casualUK": "We got a load of orders from Smart Store and our own site at once, so dispatch has slipped by a day.",
    "notes": "shipping(미) · dispatch(영) = 출고"
  },
  {
    "id": 20,
    "topics": [
      "직장"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "마진을 지키면서도 경쟁력 있는 가격을 유지하는 게 제일 어려운 부분이에요.",
    "casualUS": "The toughest part is staying competitive on price without killing our margins.",
    "formalEn": "The greatest challenge is maintaining competitive pricing while protecting our margins.",
    "casualUK": "The trickiest bit is keeping our prices competitive without eating into our margins.",
    "notes": "eat into = (이익 등을) 갉아먹다"
  },
  {
    "id": 21,
    "topics": [
      "직장"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "카페 거래처가 계약 조건을 다시 협상하자고 하는데, 최소 주문량은 양보하기 어려워요.",
    "casualUS": "One of our café accounts wants to renegotiate the terms, but I really can't budge on the minimum order.",
    "formalEn": "One of our café clients has requested to renegotiate the contract terms; however, we are unable to make concessions on the minimum order quantity.",
    "casualUK": "One of our café clients wants to renegotiate, but I can't really give any ground on the minimum order.",
    "notes": "budge(미 구어: 물러서다) · give ground(영: 양보하다) · MOQ = minimum order quantity"
  },
  {
    "id": 22,
    "topics": [
      "커피"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "이 원두는 산미가 좀 있고 끝맛이 달아요.",
    "casualUS": "This coffee's got a nice acidity and a sweet finish.",
    "formalEn": "This coffee has a pleasant acidity and a sweet finish.",
    "casualUK": "This one's got a bit of acidity and a lovely sweet finish."
  },
  {
    "id": 23,
    "topics": [
      "커피"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "핸드드립으로 드릴까요, 에스프레소로 드릴까요?",
    "casualUS": "Do you want it as a pour-over or an espresso?",
    "formalEn": "Would you prefer it as a pour-over or as an espresso?",
    "casualUK": "Would you like it as a filter or an espresso?",
    "notes": "pour-over(미) · filter coffee(영) = 핸드드립"
  },
  {
    "id": 24,
    "topics": [
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이번 에티오피아는 약배전으로 볶아서 꽃향이 잘 살아 있어.",
    "casualUS": "We did a light roast on this Ethiopian, so the floral notes really come through.",
    "formalEn": "This Ethiopian coffee has been lightly roasted, which allows its floral notes to come through clearly.",
    "casualUK": "We've roasted this Ethiopian light, so you really get the floral notes."
  },
  {
    "id": 25,
    "topics": [
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "원두는 개봉 후 2~3주 안에 드시는 게 제일 맛있어요.",
    "casualUS": "Coffee tastes best within two to three weeks of opening the bag.",
    "formalEn": "For the best flavor, we recommend enjoying the coffee within two to three weeks of opening.",
    "casualUK": "It's at its best within two or three weeks of opening the bag."
  },
  {
    "id": 26,
    "topics": [
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "분쇄도를 조금 더 곱게 해 보세요. 추출이 너무 빨라요.",
    "casualUS": "Try grinding a little finer. It's pulling way too fast.",
    "formalEn": "Please try a slightly finer grind setting, as the extraction is running too quickly.",
    "casualUK": "Try going a bit finer on the grind. It's running through far too fast.",
    "notes": "pull a shot = 에스프레소를 추출하다"
  },
  {
    "id": 27,
    "topics": [
      "커피",
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "샘플 생두 잘 받았어요. 다음 주에 커핑하고 피드백 드릴게요.",
    "casualUS": "Got the green samples, thanks! We'll cup them next week and send you our feedback.",
    "formalEn": "We have received the green coffee samples. We will cup them next week and share our feedback with you.",
    "casualUK": "The green samples have arrived, cheers! We'll cup them next week and let you know what we think.",
    "notes": "cheers = 영국 구어 '고마워요'"
  },
  {
    "id": 28,
    "topics": [
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "커핑해 보니 이 로트는 발효취가 살짝 과해서 이번엔 패스할게요.",
    "casualUS": "When we cupped this lot, it came across a little too fermenty, so I'm gonna pass this time.",
    "formalEn": "Upon cupping, we found this lot to be slightly over-fermented, so we will not be purchasing it this time.",
    "casualUK": "We cupped this lot and it's a touch too funky for us, so I'll give it a miss this time.",
    "notes": "give it a miss = 영국 구어 '이번엔 건너뛰다'"
  },
  {
    "id": 29,
    "topics": [
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "1차 크랙 이후 디벨롭 타임을 1분 30초 정도로 잡았어.",
    "casualUS": "I'm going for about a minute thirty of development time after first crack.",
    "formalEn": "We have set the development time to approximately one minute and thirty seconds after first crack.",
    "casualUK": "I've gone for roughly a minute and a half of development after first crack.",
    "notes": "development time = 1차 크랙 이후 배출까지의 시간"
  },
  {
    "id": 30,
    "topics": [
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "배전도를 조금 올리면 바디감은 좋아지지만 산미가 죽을 수 있어요.",
    "casualUS": "If we roast it a little darker, we'll get more body, but we might lose some of the acidity.",
    "formalEn": "A slightly darker roast would enhance the body, but it may come at the expense of acidity.",
    "casualUK": "Take it a bit darker and you'll get more body, but you might knock back the acidity.",
    "notes": "at the expense of = ~을 희생하여"
  },
  {
    "id": 31,
    "topics": [
      "커피",
      "여행"
    ],
    "difficulty": "어려움",
    "meaningKo": "다음 달 농장 방문 때 가공 방식별로 건조대를 직접 보고 싶어요.",
    "casualUS": "When I visit the farm next month, I'd love to check out the drying beds for each process.",
    "formalEn": "During my visit to the farm next month, I would very much like to see the drying beds for each processing method.",
    "casualUK": "When I come out to the farm next month, I'd love to have a look at the drying beds for each process.",
    "notes": "raised/African beds = 건조대"
  },
  {
    "id": 32,
    "topics": [
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "이 파나마 게이샤는 재스민, 베르가못, 복숭아 노트가 층층이 올라오고 여운이 길어요.",
    "casualUS": "This Panama Geisha has layers of jasmine, bergamot and peach, with a super long finish.",
    "formalEn": "This Panama Geisha offers layered notes of jasmine, bergamot, and peach, with a remarkably long finish.",
    "casualUK": "This Panama Geisha's got layers of jasmine, bergamot and peach, and the finish just goes on and on."
  },
  {
    "id": 33,
    "topics": [
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "드럼 온도가 들쭉날쭉해서 배치마다 편차가 생기는 것 같아. 프로파일을 다시 잡아야겠어.",
    "casualUS": "The drum temp keeps swinging around, so we're getting batch-to-batch variation. I need to redo the profile.",
    "formalEn": "Fluctuations in drum temperature appear to be causing inconsistency between batches; I will need to revise the roast profile.",
    "casualUK": "The drum temperature's all over the place, so every batch is coming out slightly different. I'll need to sort out the profile.",
    "notes": "all over the place = 들쭉날쭉한 · sort out = (영 구어) 바로잡다"
  },
  {
    "id": 34,
    "topics": [
      "커피",
      "직장"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "이번 수확분 중 어느 정도를 저희 쪽에 미리 배정해 주실 수 있는지, 그리고 FOB 가격은 어떻게 되는지 궁금합니다.",
    "casualUS": "Could you set aside some of this harvest for us? How much could you allocate, and what's the FOB price?",
    "formalEn": "Could you let us know what proportion of this harvest you might be able to allocate to us in advance, and what the FOB price would be?",
    "casualUK": "Would you be able to put some of this harvest aside for us? Roughly how much, and what's the FOB price?",
    "notes": "FOB = 본선인도 조건 가격 · allocate = (물량을) 배정하다"
  },
  {
    "id": 35,
    "topics": [
      "여행"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "창가 자리로 바꿀 수 있을까요?",
    "casualUS": "Could I switch to a window seat?",
    "formalEn": "Would it be possible to change to a window seat?",
    "casualUK": "Any chance I could swap to a window seat?",
    "notes": "swap = 영국에서 특히 흔한 '바꾸다'"
  },
  {
    "id": 36,
    "topics": [
      "여행"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "이 근처에 괜찮은 카페 있어요?",
    "casualUS": "Is there a good coffee shop around here?",
    "formalEn": "Could you recommend a good café in this area?",
    "casualUK": "Is there a decent café round here?",
    "notes": "around here(미) · round here(영)"
  },
  {
    "id": 37,
    "topics": [
      "여행"
    ],
    "difficulty": "쉬움",
    "meaningKo": "공항에서 시내까지 지하철로 얼마나 걸려요?",
    "casualUS": "How long does it take to get downtown from the airport on the subway?",
    "formalEn": "How long does it take to travel from the airport to the city center by metro?",
    "casualUK": "How long does it take to get into town from the airport on the underground?",
    "notes": "downtown/subway(미) · into town/underground(영)"
  },
  {
    "id": 38,
    "topics": [
      "여행"
    ],
    "difficulty": "쉬움",
    "meaningKo": "체크인 전에 짐 좀 맡겨도 될까요?",
    "casualUS": "Can I leave my bags here before check-in?",
    "formalEn": "Would it be possible to store my luggage before check-in?",
    "casualUK": "Could I leave my luggage with you before check-in?",
    "notes": "baggage(미에서 흔함) · luggage(영에서 흔함)"
  },
  {
    "id": 39,
    "topics": [
      "여행",
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "시애틀 커피 엑스포 가는 김에 로스터리 몇 군데 둘러볼 거야.",
    "casualUS": "Since I'm going to the coffee expo in Seattle anyway, I'm gonna hit up a few roasteries.",
    "formalEn": "While attending the coffee expo in Seattle, I plan to visit several roasteries.",
    "casualUK": "While I'm over in Seattle for the coffee expo, I'm going to check out a few roasteries.",
    "notes": "hit up = 미국 구어 '(장소에) 들르다'"
  },
  {
    "id": 40,
    "topics": [
      "여행"
    ],
    "difficulty": "어려움",
    "meaningKo": "비행기가 지연돼서 환승편을 놓쳤어요. 다음 편으로 바꿔 주실 수 있나요?",
    "casualUS": "My flight was delayed and I missed my connection. Can you get me on the next one?",
    "formalEn": "My flight was delayed and I missed my connecting flight. Could you rebook me onto the next available one?",
    "casualUK": "My flight was delayed and I've missed my connection. Could you pop me on the next one?",
    "notes": "rebook = 재예약하다"
  },
  {
    "id": 41,
    "topics": [
      "여행"
    ],
    "difficulty": "어려움",
    "meaningKo": "수하물이 안 나왔어요. 분실 신고는 어디서 하나요?",
    "casualUS": "My bag never showed up. Where do I file a lost baggage claim?",
    "formalEn": "My luggage has not arrived. Where may I report it as missing?",
    "casualUK": "My case hasn't come out. Where do I report lost luggage?",
    "notes": "case/suitcase = 영국 구어로 '짐 가방'"
  },
  {
    "id": 42,
    "topics": [
      "여행"
    ],
    "difficulty": "어려움",
    "meaningKo": "렌터카 반납할 때 기름을 가득 채워 와야 하나요?",
    "casualUS": "Do I need to bring the rental car back with a full tank of gas?",
    "formalEn": "Is it necessary to return the rental car with a full tank of fuel?",
    "casualUK": "Do I have to bring the hire car back with a full tank of petrol?",
    "notes": "rental car/gas(미) · hire car/petrol(영)"
  },
  {
    "id": 43,
    "topics": [
      "여행"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "출장 경비 정산하려면 영수증이 다 필요해서 그때그때 사진으로 찍어 두는 중이야.",
    "casualUS": "I need all my receipts for my expense report, so I'm snapping pics of them as I go.",
    "formalEn": "As all receipts are required for my business travel expense claim, I am photographing each one as I go.",
    "casualUK": "I need all my receipts for my expenses claim, so I'm taking photos of them as I go.",
    "notes": "expense report(미) · expenses claim(영) = 경비 정산"
  },
  {
    "id": 44,
    "topics": [
      "여행"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "현지 사정에 밝은 사람이 안내해 주니까 관광지가 아닌 진짜 동네 분위기를 느낄 수 있었어.",
    "casualUS": "Having a local show me around meant I got a feel for the real neighborhood, not just the tourist traps.",
    "formalEn": "Being guided by someone familiar with the area allowed me to experience the authentic character of the neighborhood, beyond the usual tourist attractions.",
    "casualUK": "Having a local show me round meant I got a proper feel for the area, not just the touristy bits.",
    "notes": "tourist trap = 바가지 관광지 · proper(영 구어) = 제대로 된"
  },
  {
    "id": 45,
    "topics": [
      "음식"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "여기 뭐가 제일 맛있어요?",
    "casualUS": "What's good here?",
    "formalEn": "What would you recommend?",
    "casualUK": "What's the best thing on the menu here?"
  },
  {
    "id": 46,
    "topics": [
      "음식"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "계산서 좀 주시겠어요?",
    "casualUS": "Can we get the check, please?",
    "formalEn": "May we have the bill, please?",
    "casualUK": "Could we get the bill, please?",
    "notes": "check(미) · bill(영) = 계산서"
  },
  {
    "id": 47,
    "topics": [
      "음식"
    ],
    "difficulty": "쉬움",
    "meaningKo": "오늘 점심은 간단하게 샌드위치로 때우자.",
    "casualUS": "Let's just grab a sandwich for lunch today.",
    "formalEn": "Shall we have a light sandwich lunch today?",
    "casualUK": "Let's just grab a sarnie for lunch today.",
    "notes": "sarnie = 영국 구어 '샌드위치'"
  },
  {
    "id": 48,
    "topics": [
      "음식"
    ],
    "difficulty": "쉬움",
    "meaningKo": "제가 견과류 알레르기가 있어서요. 이거 들어가나요?",
    "casualUS": "I'm allergic to nuts. Does this have any in it?",
    "formalEn": "I have a nut allergy. Could you tell me whether this dish contains any nuts?",
    "casualUK": "I've got a nut allergy. Is there any in this?"
  },
  {
    "id": 49,
    "topics": [
      "음식",
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이 디저트는 우리 케냐 원두랑 진짜 잘 어울려.",
    "casualUS": "This dessert goes really well with our Kenyan.",
    "formalEn": "This dessert pairs exceptionally well with our Kenyan coffee.",
    "casualUK": "This pudding goes brilliantly with our Kenyan.",
    "notes": "pudding = 영국 구어로 '디저트' 전반"
  },
  {
    "id": 50,
    "topics": [
      "음식"
    ],
    "difficulty": "어려움",
    "meaningKo": "배달 음식을 너무 자주 시켜 먹어서 이번 달은 집밥 좀 해 먹으려고.",
    "casualUS": "I've been ordering takeout way too much, so I'm trying to cook at home this month.",
    "formalEn": "Having ordered food delivery far too often, I intend to cook at home more this month.",
    "casualUK": "I've been getting takeaways far too often, so I'm going to cook at home more this month.",
    "notes": "takeout(미) · takeaway(영)"
  },
  {
    "id": 51,
    "topics": [
      "음식"
    ],
    "difficulty": "어려움",
    "meaningKo": "매운 걸 잘 못 먹는데, 덜 맵게 해 주실 수 있나요?",
    "casualUS": "I can't really handle spicy food. Could you make it milder?",
    "formalEn": "I am not accustomed to spicy food; would it be possible to make it milder?",
    "casualUK": "I'm a bit of a wimp with spicy food. Could you tone it down a bit?",
    "notes": "tone down = (강도를) 낮추다"
  },
  {
    "id": 52,
    "topics": [
      "음식",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "외국 바이어한테 한식 대접하려는데, 너무 맵지 않은 메뉴로 골라 줄래?",
    "casualUS": "I'm taking some overseas buyers out for Korean food. Can you help me pick dishes that aren't too spicy?",
    "formalEn": "I will be hosting overseas buyers for a Korean meal; could you help me choose dishes that are not overly spicy?",
    "casualUK": "I'm taking some overseas buyers out for Korean food. Could you help me choose something that's not too spicy?"
  },
  {
    "id": 53,
    "topics": [
      "음식"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "발효 음식이라 향이 호불호가 갈릴 수 있는데, 한번 도전해 볼 만해요.",
    "casualUS": "It's fermented, so the smell's kind of an acquired taste, but it's totally worth a try.",
    "formalEn": "As it is a fermented dish, its aroma may be something of an acquired taste, but it is well worth trying.",
    "casualUK": "It's fermented, so the smell's a bit Marmite, but it's well worth a go.",
    "notes": "acquired taste = 익숙해져야 좋아지는 맛 · Marmite(영 구어) = 호불호가 극명한 것"
  },
  {
    "id": 54,
    "topics": [
      "음식",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "코스마다 와인 대신 커피를 페어링하는 팝업 디너를 기획 중이야.",
    "casualUS": "I'm planning a pop-up dinner where we pair each course with coffee instead of wine.",
    "formalEn": "I am planning a pop-up dinner in which each course will be paired with coffee rather than wine.",
    "casualUK": "I'm putting together a pop-up supper where each course is paired with coffee instead of wine.",
    "notes": "supper = 영국에서 저녁 식사를 이르는 말 중 하나"
  },
  {
    "id": 55,
    "topics": [
      "감정"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "오늘 좀 피곤하다.",
    "casualUS": "I'm kinda beat today.",
    "formalEn": "I am feeling rather tired today.",
    "casualUK": "I'm a bit shattered today.",
    "notes": "beat(미) · shattered(영) = 녹초가 된"
  },
  {
    "id": 56,
    "topics": [
      "감정"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "그 말 들으니까 마음이 놓이네.",
    "casualUS": "That's a relief to hear.",
    "formalEn": "I am relieved to hear that.",
    "casualUK": "Oh, that's a weight off my mind."
  },
  {
    "id": 57,
    "topics": [
      "감정"
    ],
    "difficulty": "쉬움",
    "meaningKo": "첫 도매 계약 따서 진짜 신나!",
    "casualUS": "I'm so pumped. We landed our first wholesale account!",
    "formalEn": "I am delighted that we have secured our first wholesale contract.",
    "casualUK": "I'm chuffed to bits. We've landed our first wholesale client!",
    "notes": "pumped(미) · chuffed to bits(영) = 너무 기쁜"
  },
  {
    "id": 58,
    "topics": [
      "감정"
    ],
    "difficulty": "쉬움",
    "meaningKo": "리뷰에 악플이 달려서 하루 종일 신경 쓰였어.",
    "casualUS": "Someone left a nasty review and it bugged me all day.",
    "formalEn": "A harsh review was posted, and it weighed on my mind all day.",
    "casualUK": "Someone left a horrible review and it wound me up all day.",
    "notes": "wind (someone) up = 영국 구어 '짜증 나게 하다'"
  },
  {
    "id": 59,
    "topics": [
      "감정"
    ],
    "difficulty": "쉬움",
    "meaningKo": "요즘 일이 손에 안 잡혀.",
    "casualUS": "I just can't focus on work lately.",
    "formalEn": "I have been finding it difficult to concentrate on my work recently.",
    "casualUK": "I can't seem to get my head into work lately."
  },
  {
    "id": 60,
    "topics": [
      "감정"
    ],
    "difficulty": "어려움",
    "meaningKo": "혼자 다 떠안으려다 보니 번아웃이 온 것 같아.",
    "casualUS": "I think I'm burned out from trying to do everything myself.",
    "formalEn": "I believe I am experiencing burnout from trying to handle everything on my own.",
    "casualUK": "I think I've burnt myself out trying to do everything on my own.",
    "notes": "burned(미) · burnt(영)"
  },
  {
    "id": 61,
    "topics": [
      "감정"
    ],
    "difficulty": "어려움",
    "meaningKo": "잘될지 확신은 없지만, 해 보지도 않고 후회하긴 싫어.",
    "casualUS": "I'm not sure it'll work out, but I don't wanna regret not trying.",
    "formalEn": "I am not certain it will succeed, but I would rather not regret never having tried.",
    "casualUK": "I'm not sure it'll work out, but I'd hate to regret not giving it a go.",
    "notes": "give it a go = 영국에서 흔한 '한번 해 보다' (미국은 give it a shot)"
  },
  {
    "id": 62,
    "topics": [
      "감정",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "단골손님이 우리 커피 덕분에 하루가 행복하다고 해서 뭉클했어.",
    "casualUS": "One of our regulars said our coffee makes their day, and it really got to me.",
    "formalEn": "A regular customer told me that our coffee brightens their day, and I was genuinely moved.",
    "casualUK": "One of our regulars said our coffee makes their day. I got a bit choked up, to be honest.",
    "notes": "make someone's day = 하루를 행복하게 하다 · choked up = 목이 메는"
  },
  {
    "id": 63,
    "topics": [
      "감정"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "매출이 줄어드는 걸 보면서 불안했지만, 흔들리지 않으려고 애썼어.",
    "casualUS": "Watching sales drop made me anxious, but I tried hard not to let it throw me off.",
    "formalEn": "Watching sales decline made me anxious, but I made a conscious effort to remain composed.",
    "casualUK": "Seeing sales drop off made me anxious, but I tried not to let it knock me off course."
  },
  {
    "id": 64,
    "topics": [
      "감정"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "고맙다는 말을 제대로 못 한 게 계속 마음에 걸려.",
    "casualUS": "It's still eating at me that I never really thanked them properly.",
    "formalEn": "It continues to trouble me that I never expressed my gratitude properly.",
    "casualUK": "It's still playing on my mind that I never thanked them properly.",
    "notes": "eat at(미) · play on one's mind(영) = 계속 마음에 걸리다"
  },
  {
    "id": 65,
    "topics": [
      "문화",
      "커피"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "한국 사람들은 아이스 아메리카노를 사계절 내내 마셔요.",
    "casualUS": "Koreans drink iced Americanos all year round.",
    "formalEn": "Koreans tend to drink iced Americanos throughout the year.",
    "casualUK": "Koreans drink iced Americanos all year round, even in the dead of winter."
  },
  {
    "id": 66,
    "topics": [
      "문화"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "영국 사람들은 차를 정말 많이 마시더라.",
    "casualUS": "People in the UK drink so much tea.",
    "formalEn": "People in the United Kingdom drink a remarkable amount of tea.",
    "casualUK": "The Brits drink loads of tea, don't they?",
    "notes": "don't they? = 영국 구어에서 매우 흔한 부가의문문"
  },
  {
    "id": 67,
    "topics": [
      "문화"
    ],
    "difficulty": "쉬움",
    "meaningKo": "한국에서는 식사할 때 어른이 먼저 수저를 드셔야 해.",
    "casualUS": "In Korea, you wait for the elders to start eating first.",
    "formalEn": "In Korea, it is customary to wait for one's elders to begin eating first.",
    "casualUK": "In Korea, you wait for the older people to start before you tuck in.",
    "notes": "tuck in = 영국 구어 '(맛있게) 먹기 시작하다'"
  },
  {
    "id": 68,
    "topics": [
      "문화"
    ],
    "difficulty": "쉬움",
    "meaningKo": "미국에서는 팁을 보통 15~20% 정도 주지?",
    "casualUS": "In the States, you usually tip around 15 to 20 percent, right?",
    "formalEn": "In the United States, is it customary to tip around 15 to 20 percent?",
    "casualUK": "In America you usually tip about 15 to 20 per cent, don't you?",
    "notes": "percent(미) · per cent(영)"
  },
  {
    "id": 69,
    "topics": [
      "문화"
    ],
    "difficulty": "쉬움",
    "meaningKo": "한국은 배달 문화가 엄청 발달해서 한밤중에도 뭐든 시킬 수 있어.",
    "casualUS": "Delivery is huge in Korea. You can get pretty much anything, even in the middle of the night.",
    "formalEn": "Delivery services are highly developed in Korea; almost anything can be ordered, even late at night.",
    "casualUK": "Delivery's massive in Korea. You can get almost anything brought round, even in the middle of the night."
  },
  {
    "id": 70,
    "topics": [
      "문화",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "한국에선 카페에서 노트북 켜 놓고 몇 시간씩 공부하는 게 흔한 일이야.",
    "casualUS": "In Korea, it's totally normal to camp out in a café with your laptop and study for hours.",
    "formalEn": "In Korea, it is quite common for people to study in cafés on their laptops for several hours.",
    "casualUK": "In Korea it's perfectly normal to sit in a café with your laptop revising for hours.",
    "notes": "camp out(미 구어: 오래 눌러앉다) · revise(영: 시험공부하다)"
  },
  {
    "id": 71,
    "topics": [
      "문화",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "추석이나 설 같은 명절엔 드립백 선물 세트를 주문하는 기업 고객이 많아.",
    "casualUS": "Around Chuseok and Lunar New Year, a lot of corporate clients order drip bag gift sets.",
    "formalEn": "During major holidays such as Chuseok and Lunar New Year, many corporate clients order drip bag gift sets.",
    "casualUK": "Over Chuseok and Lunar New Year, loads of corporate clients order drip bag gift sets."
  },
  {
    "id": 72,
    "topics": [
      "문화",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "한국에선 직장 상사를 이름 대신 직함으로 불러.",
    "casualUS": "In Korea, you don't call your boss by their first name. You use their title.",
    "formalEn": "In Korea, one generally addresses a superior by their job title rather than by name.",
    "casualUK": "In Korea you'd never call your manager by their first name. It's always their job title."
  },
  {
    "id": 73,
    "topics": [
      "문화",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "스페셜티 커피 문화가 자리 잡으면서 사람들이 산지와 가공 방식까지 따지기 시작했어.",
    "casualUS": "As specialty coffee has caught on, people have started caring about origin and even processing methods.",
    "formalEn": "As specialty coffee culture has become established, consumers have begun to pay attention to origin and even processing methods.",
    "casualUK": "Now that speciality coffee's really taken off, people have started caring about origin and even how it's processed.",
    "notes": "specialty(미) · speciality(영) 철자 차이"
  },
  {
    "id": 74,
    "topics": [
      "문화",
      "직장"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "눈치 문화 때문에 외국인 동료들은 한국 회사에서 가끔 헷갈려 해.",
    "casualUS": "Because of the whole nunchi thing, reading the room, foreign coworkers sometimes get confused at Korean companies.",
    "formalEn": "Owing to the culture of nunchi, the unspoken expectation to read the room, foreign colleagues sometimes find Korean workplaces confusing.",
    "casualUK": "With the whole nunchi thing, reading the room, foreign colleagues can find Korean workplaces a bit baffling.",
    "notes": "read the room = 분위기를 파악하다(눈치)"
  },
  {
    "id": 75,
    "topics": [
      "시사"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "요즘 물가가 너무 올랐어.",
    "casualUS": "Everything's gotten so expensive lately.",
    "formalEn": "The cost of living has risen significantly in recent months.",
    "casualUK": "Everything's got so pricey lately.",
    "notes": "gotten(미) · got(영)"
  },
  {
    "id": 76,
    "topics": [
      "시사"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "오늘 뉴스 봤어? 환율이 또 올랐대.",
    "casualUS": "Did you see the news? The exchange rate went up again.",
    "formalEn": "Have you seen today's news? The exchange rate has risen again.",
    "casualUK": "Have you seen the news? The exchange rate's gone up again.",
    "notes": "미국은 단순과거(Did you see), 영국은 현재완료(Have you seen)를 선호"
  },
  {
    "id": 77,
    "topics": [
      "시사"
    ],
    "difficulty": "쉬움",
    "meaningKo": "올여름이 역대급으로 더웠대.",
    "casualUS": "They're saying this summer was one of the hottest on record.",
    "formalEn": "This summer is reported to have been one of the hottest on record.",
    "casualUK": "Apparently this summer was one of the hottest on record.",
    "notes": "on record = 기록상"
  },
  {
    "id": 78,
    "topics": [
      "시사"
    ],
    "difficulty": "쉬움",
    "meaningKo": "요즘 다들 AI 얘기뿐이야.",
    "casualUS": "All anyone talks about these days is AI.",
    "formalEn": "Artificial intelligence seems to dominate every conversation these days.",
    "casualUK": "Everyone's banging on about AI these days.",
    "notes": "bang on about = 영국 구어 '(지겹게) 계속 떠들다'"
  },
  {
    "id": 79,
    "topics": [
      "시사"
    ],
    "difficulty": "쉬움",
    "meaningKo": "배송비가 오르면서 무료배송 기준 금액을 올리는 가게가 많아졌어.",
    "casualUS": "Since shipping costs went up, a lot of shops have raised their free-shipping minimum.",
    "formalEn": "As shipping costs have increased, many retailers have raised their minimum order threshold for free shipping.",
    "casualUK": "Now that postage has gone up, loads of shops have put up the minimum spend for free delivery.",
    "notes": "shipping(미) · postage(영) = 배송비 · put up = (영) 가격을 올리다"
  },
  {
    "id": 80,
    "topics": [
      "시사",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "원화 약세 때문에 생두 수입 비용이 확 늘었어.",
    "casualUS": "With the won so weak, our green coffee import costs have shot up.",
    "formalEn": "Owing to the weakness of the won, our green coffee import costs have risen sharply.",
    "casualUK": "The won's so weak at the moment that importing green coffee has got loads more expensive.",
    "notes": "shoot up = 급등하다"
  },
  {
    "id": 81,
    "topics": [
      "시사",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "기후 변화 때문에 커피를 재배할 수 있는 땅이 줄어들 거라는 연구가 나왔어.",
    "casualUS": "There's a new study saying climate change is gonna shrink the land where coffee can grow.",
    "formalEn": "A recent study suggests that climate change will reduce the amount of land suitable for coffee cultivation.",
    "casualUK": "There's a new study out saying climate change will shrink the land that's suitable for growing coffee."
  },
  {
    "id": 82,
    "topics": [
      "시사",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "해상 운임이 뛰어서 컨테이너 하나 들여오는 비용이 두 배가 됐어.",
    "casualUS": "Freight rates spiked, so it now costs twice as much to bring in a container.",
    "formalEn": "Owing to a surge in ocean freight rates, the cost of importing a single container has doubled.",
    "casualUK": "Shipping rates have gone through the roof, so bringing a container in costs double what it used to.",
    "notes": "go through the roof = 천정부지로 오르다"
  },
  {
    "id": 83,
    "topics": [
      "시사",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "EU 산림 벌채 규정 때문에 생두 공급망 전반에서 이력 추적 요구가 강해지고 있어.",
    "casualUS": "Because of the EU deforestation rules, there's way more pressure for traceability across the whole green coffee supply chain.",
    "formalEn": "The EU Deforestation Regulation is driving stricter traceability requirements throughout the green coffee supply chain.",
    "casualUK": "With the EU deforestation rules coming in, there's much more pressure for traceability right across the green coffee supply chain.",
    "notes": "EUDR = EU 산림 벌채 방지 규정 · traceability = 이력 추적 가능성"
  },
  {
    "id": 84,
    "topics": [
      "시사"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "소비 심리가 위축되면서 사람들이 비싼 스페셜티보다 가성비를 찾는 분위기야.",
    "casualUS": "With consumer confidence down, people are going for value over pricey specialty coffee.",
    "formalEn": "With consumer sentiment weakening, customers are increasingly prioritizing value for money over premium specialty coffee.",
    "casualUK": "With everyone tightening their belts, people are going for value for money rather than posh speciality coffee.",
    "notes": "tighten one's belt = 허리띠를 졸라매다 · posh(영) = 고급스러운"
  },
  {
    "id": 85,
    "topics": [
      "관용구"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "천천히 해, 급할 거 없어.",
    "casualUS": "Take your time, no rush.",
    "formalEn": "Please take your time; there is no hurry.",
    "casualUK": "No rush. Take as long as you need."
  },
  {
    "id": 86,
    "topics": [
      "관용구"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "그건 식은 죽 먹기지.",
    "casualUS": "It's a piece of cake.",
    "formalEn": "It is very straightforward.",
    "casualUK": "It's a doddle.",
    "notes": "doddle = 영국 구어 '아주 쉬운 일'"
  },
  {
    "id": 87,
    "topics": [
      "관용구"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이번 달 목표 거의 다 왔어. 조금만 더 힘내자!",
    "casualUS": "We're in the home stretch for this month's goal. Let's keep pushing!",
    "formalEn": "We are close to reaching this month's target; let us make one final effort.",
    "casualUK": "We're nearly there with this month's target. Let's keep going!",
    "notes": "home stretch = (경주의) 마지막 직선 구간 → 막바지"
  },
  {
    "id": 88,
    "topics": [
      "관용구"
    ],
    "difficulty": "쉬움",
    "meaningKo": "일단 한번 해 보자. 밑져야 본전이지.",
    "casualUS": "Let's just give it a shot. What've we got to lose?",
    "formalEn": "Let us give it a try; we have nothing to lose.",
    "casualUK": "Let's just give it a go. Nothing ventured, nothing gained.",
    "notes": "nothing ventured, nothing gained = 모험 없이는 얻는 것도 없다"
  },
  {
    "id": 89,
    "topics": [
      "관용구"
    ],
    "difficulty": "쉬움",
    "meaningKo": "그건 나중에 생각하자. 닥치면 해결하면 돼.",
    "casualUS": "Let's cross that bridge when we come to it.",
    "formalEn": "We can address that issue if and when it arises.",
    "casualUK": "We'll cross that bridge when we come to it. No point worrying now.",
    "notes": "cross that bridge when we come to it = 그 문제는 닥쳤을 때 생각하자 (미·영 공통)"
  },
  {
    "id": 90,
    "topics": [
      "관용구"
    ],
    "difficulty": "어려움",
    "meaningKo": "비용 줄이려다 품질을 희생하면 소탐대실이야.",
    "casualUS": "Cutting corners on quality to save money is penny-wise and pound-foolish.",
    "formalEn": "Compromising on quality in order to reduce costs would be a false economy.",
    "casualUK": "Scrimping on quality to save a few quid is a false economy.",
    "notes": "cut corners = 대충 하다 · quid(영 구어) = 파운드 · false economy = 결국 손해인 절약"
  },
  {
    "id": 91,
    "topics": [
      "관용구"
    ],
    "difficulty": "어려움",
    "meaningKo": "그 얘기는 이제 그만하자. 이미 엎질러진 물이야.",
    "casualUS": "Let's not dwell on it. No use crying over spilled milk.",
    "formalEn": "Let us not dwell on it; what is done cannot be undone.",
    "casualUK": "Let's not dwell on it. No use crying over spilt milk.",
    "notes": "spilled(미) · spilt(영)"
  },
  {
    "id": 92,
    "topics": [
      "관용구",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "새 블렌드가 반응이 좋아서 날개 돋친 듯 팔리고 있어.",
    "casualUS": "The new blend is selling like hotcakes.",
    "formalEn": "The new blend has been extremely well received and is selling very quickly.",
    "casualUK": "The new blend is flying off the shelves.",
    "notes": "sell like hotcakes / fly off the shelves = 불티나게 팔리다"
  },
  {
    "id": 93,
    "topics": [
      "관용구",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "이번 박람회는 한마디로 대박이었어. 기대보다 훨씬 많은 거래처를 만났어.",
    "casualUS": "The trade show was a total home run. We met way more potential clients than I expected.",
    "formalEn": "The trade show was a resounding success; we met considerably more prospective clients than anticipated.",
    "casualUK": "The trade show was a roaring success. We met loads more potential clients than I'd expected.",
    "notes": "home run(미, 야구) · roaring success(영) = 대성공"
  },
  {
    "id": 94,
    "topics": [
      "관용구",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "한 바구니에 달걀을 다 담지 않으려고 산지를 다변화하고 있어.",
    "casualUS": "We're diversifying our origins so we don't put all our eggs in one basket.",
    "formalEn": "We are diversifying our sourcing origins to avoid excessive dependence on any single supplier.",
    "casualUK": "We're spreading our origins out so we're not putting all our eggs in one basket.",
    "notes": "put all one's eggs in one basket = 한 곳에 모든 것을 걸다"
  },
  {
    "id": 95,
    "topics": [
      "관용구"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "그 제안은 너무 좋아서 오히려 믿기 힘들어. 분명 뭔가 함정이 있을 거야.",
    "casualUS": "That offer sounds too good to be true. There's gotta be a catch.",
    "formalEn": "The offer appears too good to be true; there may well be hidden conditions.",
    "casualUK": "That offer sounds too good to be true. There must be a catch somewhere.",
    "notes": "catch = 숨은 함정·조건"
  },
  {
    "id": 96,
    "topics": [
      "격식"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "처음 뵙겠습니다. 블랙업 커피를 운영하고 있습니다.",
    "casualUS": "Hi, nice to meet you! I run BLACKUP COFFEE.",
    "formalEn": "It is a pleasure to meet you. I am the owner of BLACKUP COFFEE.",
    "casualUK": "Hiya, lovely to meet you! I run BLACKUP COFFEE.",
    "notes": "Hiya / lovely to meet you = 영국식 친근한 인사"
  },
  {
    "id": 97,
    "topics": [
      "격식"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "첨부 파일 확인 부탁드립니다.",
    "casualUS": "Can you take a look at the attachment?",
    "formalEn": "Please find the attached file for your review.",
    "casualUK": "Could you have a look at the attachment?",
    "notes": "take a look(미) · have a look(영)"
  },
  {
    "id": 98,
    "topics": [
      "격식"
    ],
    "difficulty": "쉬움",
    "meaningKo": "답장이 늦어져서 죄송합니다.",
    "casualUS": "Sorry for the late reply!",
    "formalEn": "I apologize for the delay in my response.",
    "casualUK": "Sorry for the slow reply!"
  },
  {
    "id": 99,
    "topics": [
      "격식"
    ],
    "difficulty": "쉬움",
    "meaningKo": "편하실 때 통화 가능한 시간 알려 주세요.",
    "casualUS": "Let me know when's a good time to hop on a call.",
    "formalEn": "Please let me know a time that would be convenient for a call.",
    "casualUK": "Let me know when's good for a quick chat on the phone.",
    "notes": "hop on a call = 미국 비즈니스 구어 '통화하다'"
  },
  {
    "id": 100,
    "topics": [
      "격식",
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "배송이 지연되어 불편을 드려 죄송합니다. 오늘 바로 발송하겠습니다.",
    "casualUS": "So sorry your order's running late! We're shipping it out today.",
    "formalEn": "We sincerely apologize for the inconvenience caused by the delayed delivery. Your order will be dispatched today.",
    "casualUK": "Really sorry your order's been held up! We're sending it out today.",
    "notes": "held up = (영 구어) 지연된"
  },
  {
    "id": 101,
    "topics": [
      "격식",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "샘플 비용은 저희가 부담하겠지만, 국제 운송비는 귀사에서 부담해 주실 수 있을까요?",
    "casualUS": "We'll cover the samples, but could you guys take care of the international shipping?",
    "formalEn": "We will cover the cost of the samples; would your company be able to bear the international shipping charges?",
    "casualUK": "We'll pay for the samples, but would you be able to sort out the international shipping?",
    "notes": "bear the cost = 비용을 부담하다"
  },
  {
    "id": 102,
    "topics": [
      "격식"
    ],
    "difficulty": "어려움",
    "meaningKo": "계약 조건을 검토한 후 이번 주 금요일까지 회신드리겠습니다.",
    "casualUS": "I'll go over the terms and get back to you by Friday.",
    "formalEn": "Once I have reviewed the terms of the contract, I will reply to you by this Friday.",
    "casualUK": "I'll have a look through the terms and come back to you by Friday.",
    "notes": "come back to someone = 영국 비즈니스 구어 '회신하다'"
  },
  {
    "id": 103,
    "topics": [
      "격식",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "선적 일정에 차질이 생긴 점 양해 부탁드립니다. 새 도착 예정일은 다음 주 수요일입니다.",
    "casualUS": "Heads up, the shipment's been delayed. It should get there next Wednesday now.",
    "formalEn": "We kindly ask for your understanding regarding the delay to the shipping schedule. The revised estimated arrival date is next Wednesday.",
    "casualUK": "Just to let you know, the shipment's been delayed. It should now arrive next Wednesday.",
    "notes": "heads up = 미국 구어 '미리 알려 줄게' · ETA = estimated time of arrival"
  },
  {
    "id": 104,
    "topics": [
      "격식",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "지난번 로트의 수분 함량이 기준치를 초과했던 건에 대해 공식적인 설명을 요청드립니다.",
    "casualUS": "We need to know what happened with the moisture on that last lot. It was way over spec.",
    "formalEn": "We would like to request a formal explanation regarding the moisture content of the previous lot, which exceeded the agreed specification.",
    "casualUK": "We'd like an explanation about the moisture content on the last lot. It was well over spec.",
    "notes": "spec = specification(규격) · well over(영) = 훨씬 초과한"
  },
  {
    "id": 105,
    "topics": [
      "격식",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "귀사와의 장기적인 파트너십을 기대하며, 향후 직거래 가능성에 대해서도 논의하고 싶습니다.",
    "casualUS": "We'd love to build a long-term partnership with you, and we're also interested in talking about trading directly down the road.",
    "formalEn": "We look forward to a long-term partnership with your company and would welcome the opportunity to discuss the possibility of direct trade in the future.",
    "casualUK": "We'd love to build a long-term relationship with you, and we'd be keen to chat about trading directly further down the line.",
    "notes": "down the road(미) · further down the line(영) = 나중에 · keen(영) = 하고 싶은"
  },
  {
    "id": 106,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "안녕하세요! 한국에서 온 로스터리예요. 한번 맛보실래요?",
    "casualUS": "Hi there! We're a roastery from Korea. Wanna try some?",
    "formalEn": "Good morning. We are a specialty coffee roastery from Korea. Would you like to try a sample?",
    "casualUK": "Hiya! We're a roastery from Korea. Fancy a taste?",
    "notes": "호주: G'day! / How ya going? 로 인사 · 'Keen to try some?'(맛보실래요?)도 자연스러움"
  },
  {
    "id": 107,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "천천히 보세요. 궁금한 거 있으면 편하게 물어보세요.",
    "casualUS": "Take your time looking around. Just holler if you have any questions.",
    "formalEn": "Please feel free to take your time. Do let me know if you have any questions.",
    "casualUK": "Have a browse. Just give me a shout if you've got any questions.",
    "notes": "호주: No rush, have a look! Give us a yell if you need anything. (us = me 의미로 흔히 씀)"
  },
  {
    "id": 108,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이건 콜롬비아 워시드예요. 초콜릿이랑 빨간 사과 같은 단맛이 나요.",
    "casualUS": "This one's a washed Colombian. You'll get chocolate and kind of a red-apple sweetness.",
    "formalEn": "This is a washed Colombian coffee, with notes of chocolate and a sweetness reminiscent of red apple.",
    "casualUK": "This one's a washed Colombian. It's got chocolate and a lovely red-apple sweetness.",
    "notes": "washed = 워시드(수세식) 가공"
  },
  {
    "id": 109,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이건 내추럴 프로세스라서 과일 향이 훨씬 진해요.",
    "casualUS": "This one's a natural process, so it's way fruitier.",
    "formalEn": "This coffee is naturally processed, which gives it a much more pronounced fruitiness.",
    "casualUK": "This one's a natural, so it's much fruitier.",
    "notes": "natural = 내추럴 가공 · honey = 허니 프로세스 · 호주: heaps fruitier (heaps = 훨씬, 엄청)"
  },
  {
    "id": 110,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이건 중배전이라 우유랑 섞어도 맛이 잘 살아요. 플랫화이트에 딱이에요.",
    "casualUS": "It's a medium roast, so it holds up really well in milk. Perfect for a latte or a flat white.",
    "formalEn": "As a medium roast, it holds up well with milk, making it ideal for a flat white.",
    "casualUK": "It's a medium roast, so it cuts through milk nicely. Spot on for a flat white.",
    "notes": "호주(특히 멜버른)는 flat white가 기본 우유 커피 · cut through milk = 우유 속에서도 맛이 살아 있다"
  },
  {
    "id": 111,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "산미가 부담스러우시면 이쪽 블렌드가 더 잘 맞으실 거예요.",
    "casualUS": "If you're not big on acidity, you'll probably like this blend better.",
    "formalEn": "If you prefer lower acidity, this blend may be more to your taste.",
    "casualUK": "If acidity's not really your thing, you'll probably prefer this blend.",
    "notes": "호주: I reckon you'll like this blend more. (reckon = think, 호주에서 매우 흔함)"
  },
  {
    "id": 112,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "생두는 농장에서 직접 사 오고, 로스팅은 한국에 있는 저희 로스터리에서 소량씩 해요.",
    "casualUS": "We buy our green coffee straight from the farms and roast it in small batches at our roastery in Korea.",
    "formalEn": "We source our green coffee directly from farms and roast it in small batches at our roastery in Korea.",
    "casualUK": "We buy our green coffee direct from the farms and roast it in small batches back home in Korea.",
    "notes": "source = (원료를) 조달하다 · direct trade = 직거래"
  },
  {
    "id": 113,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "이건 무산소 발효를 거친 로트라서 와인 같은 풍미가 나는데, 호불호가 좀 갈려요.",
    "casualUS": "This lot went through anaerobic fermentation, so it's got a winey thing going on. People either love it or hate it.",
    "formalEn": "This lot has undergone anaerobic fermentation, which imparts a wine-like character; it tends to divide opinion.",
    "casualUK": "This lot's been through anaerobic fermentation, so it's quite winey. It's a bit Marmite, to be honest.",
    "notes": "anaerobic = 무산소 · 호주: It's a bit polarising. (polarising = 호불호가 갈리는, 호·영 철자)"
  },
  {
    "id": 114,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "도매가는 1kg에 45호주달러부터 시작해요.",
    "casualUS": "Wholesale starts at 45 Australian dollars a kilo.",
    "formalEn": "Our wholesale prices start from AUD 45 per kilogram.",
    "casualUK": "Wholesale starts from 45 Aussie dollars a kilo.",
    "notes": "호주: forty-five bucks a kilo 처럼 bucks도 흔함 · AUD = 호주 달러"
  },
  {
    "id": 115,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "최소 주문량은 원두 기준 10kg이에요.",
    "casualUS": "Our minimum order is 10 kilos of roasted coffee.",
    "formalEn": "Our minimum order quantity is 10 kilograms of roasted coffee.",
    "casualUK": "The minimum order's 10 kilos of roasted beans.",
    "notes": "MOQ = minimum order quantity · 구어로 kilo(s)"
  },
  {
    "id": 116,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "호주로 배송은 가능한데, 검역 때문에 통관에 며칠 더 걸릴 수 있어요.",
    "casualUS": "We can ship to Australia, but customs might take a few extra days because of biosecurity checks.",
    "formalEn": "We are able to ship to Australia; however, customs clearance may take a few additional days owing to biosecurity inspections.",
    "casualUK": "We can send it to Australia, but it might take a few extra days to clear customs because of the biosecurity checks.",
    "notes": "호주는 biosecurity(검역)가 매우 엄격함 · 생두는 로스팅 원두보다 수입 조건이 까다로움"
  },
  {
    "id": 117,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "샘플 보내 드릴 수 있어요. 주소랑 받으실 분 성함 알려 주시겠어요?",
    "casualUS": "We can send you some samples. Can I grab your address and who they should go to?",
    "formalEn": "We would be happy to send you samples. Could you please provide your address and the name of the recipient?",
    "casualUK": "Happy to send some samples over. Could I get your address and who to send them to?",
    "notes": "호주: Happy to send some over, no worries."
  },
  {
    "id": 118,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "배송비는 주문량에 따라 달라지는데, 20kg 이상이면 저희가 부담해요.",
    "casualUS": "Shipping depends on how much you order, but it's on us for anything over 20 kilos.",
    "formalEn": "Shipping costs vary depending on order volume; for orders over 20 kilograms, we will cover the shipping.",
    "casualUK": "Postage depends on the order size, but it's on us for anything over 20 kilos.",
    "notes": "it's on us = 저희가 낼게요 · 호주 B2B에서는 운송비를 freight라고도 많이 함"
  },
  {
    "id": 119,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "호주 내 유통사를 통하면 리드타임이 짧아지는데, 아직 현지 파트너를 찾고 있는 중이에요.",
    "casualUS": "Going through a local distributor would cut down lead times, but we're still looking for a partner in Australia.",
    "formalEn": "Working with a local distributor would shorten lead times; however, we are still in the process of identifying a partner in Australia.",
    "casualUK": "Going through a local distributor would cut the lead times, but we're still on the lookout for a partner over here.",
    "notes": "lead time = 주문~납품까지 걸리는 기간 · on the lookout = 찾는 중"
  },
  {
    "id": 120,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "가격은 환율이랑 생두 시세에 따라 분기마다 조정될 수 있다는 점 참고해 주세요.",
    "casualUS": "Just a heads-up, prices might change each quarter depending on exchange rates and the green coffee market.",
    "formalEn": "Please note that prices may be adjusted quarterly in line with exchange rates and green coffee market prices.",
    "casualUK": "Just so you know, prices might be adjusted every quarter depending on the exchange rate and green coffee prices.",
    "notes": "heads-up = 미리 알려 드림 (호주에서도 흔함)"
  },
  {
    "id": 121,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "명함 하나 드릴게요.",
    "casualUS": "Here's my card.",
    "formalEn": "Please allow me to give you my business card.",
    "casualUK": "Here, have one of my cards."
  },
  {
    "id": 122,
    "topics": [
      "멜버른"
    ],
    "difficulty": "쉬움",
    "meaningKo": "인스타그램 하세요? 저희 계정 팔로우해 주세요.",
    "casualUS": "Are you on Instagram? Give us a follow!",
    "formalEn": "Are you on Instagram? We would be delighted if you followed our account.",
    "casualUK": "Are you on Insta? Give us a follow if you fancy.",
    "notes": "호주: Chuck us a follow! (chuck = 던지다→하다, us = me/우리) · Insta = Instagram"
  },
  {
    "id": 123,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "한국 돌아가면 다음 주에 이메일 드릴게요.",
    "casualUS": "I'll shoot you an email next week once I'm back in Korea.",
    "formalEn": "I will email you next week upon my return to Korea.",
    "casualUK": "I'll drop you an email next week when I'm back in Korea.",
    "notes": "shoot(미) · drop(영·호) an email · 호주: I'll flick you an email. (flick = 보내다)"
  },
  {
    "id": 124,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "오늘 얘기 나눈 내용 정리해서 가격표랑 같이 보내 드릴게요.",
    "casualUS": "I'll put together a recap of what we talked about and send it over with our price list.",
    "formalEn": "I will send you a summary of today's discussion together with our price list.",
    "casualUK": "I'll write up what we talked about and send it over with our price list.",
    "notes": "호주: I'll flick it through to you with our price list. (flick through = 보내 주다)"
  },
  {
    "id": 125,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "연락처 여기 적어 주시면, 샘플 준비되는 대로 연락드릴게요.",
    "casualUS": "If you jot down your contact info here, I'll reach out as soon as the samples are ready.",
    "formalEn": "If you could leave your contact details here, I will get in touch as soon as the samples are ready.",
    "casualUK": "If you pop your details down here, I'll get in touch as soon as the samples are ready.",
    "notes": "contact details = 호·영에서 흔한 '연락처' (미국은 contact info)"
  },
  {
    "id": 126,
    "topics": [
      "멜버른"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "죄송한데, 다시 한번 말씀해 주시겠어요?",
    "casualUS": "Sorry, could you say that again?",
    "formalEn": "I beg your pardon; could you please repeat that?",
    "casualUK": "Sorry, come again?",
    "notes": "호주 억양이 빠르면 부담 없이 'Sorry, say that again?' · 'Pardon?'도 무난"
  },
  {
    "id": 127,
    "topics": [
      "멜버른"
    ],
    "difficulty": "쉬움",
    "meaningKo": "조금만 천천히 말씀해 주실 수 있을까요? 영어가 아직 서툴러서요.",
    "casualUS": "Could you slow down a little? My English isn't perfect yet.",
    "formalEn": "Would you mind speaking a little more slowly? I am still improving my English.",
    "casualUK": "Could you slow down a bit? My English isn't brilliant yet.",
    "notes": "대부분 'No worries!' 하고 천천히 말해 줌"
  },
  {
    "id": 128,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "그냥 둘러보셔도 돼요. 부담 갖지 마세요.",
    "casualUS": "No pressure, feel free to just look around.",
    "formalEn": "Please feel free to browse; there is no obligation whatsoever.",
    "casualUK": "No pressure at all, just have a look around.",
    "notes": "손님이 'Just looking, thanks'라고 하면 → 'No worries! Enjoy the show.' (호주)"
  },
  {
    "id": 129,
    "topics": [
      "멜버른"
    ],
    "difficulty": "쉬움",
    "meaningKo": "얘기 즐거웠어요! 남은 행사도 즐겁게 보내세요.",
    "casualUS": "Great chatting with you! Enjoy the rest of the show.",
    "formalEn": "It was a pleasure speaking with you. I hope you enjoy the rest of the event.",
    "casualUK": "Lovely chatting to you! Enjoy the rest of the show.",
    "notes": "chat with(미) · chat to(영·호) · 호주: Great to meet you, enjoy the rest of the show!"
  },
  {
    "id": 130,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "어려움",
    "meaningKo": "다른 분이 기다리셔서요, 잠깐만 실례할게요. 금방 다시 올게요.",
    "casualUS": "Sorry, someone's waiting, so let me just jump over there. I'll be right back.",
    "formalEn": "Please excuse me for a moment; another visitor is waiting. I will be right with you again.",
    "casualUK": "Sorry, I've just got someone waiting. Won't be a minute!",
    "notes": "호주: Back in a sec! / Won't be a tick! (tick = 잠깐)"
  },
  {
    "id": 131,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "오늘은 시간이 부족해서 아쉽네요. 괜찮으시면 내일 오전에 다시 들러 주세요. 제대로 커핑해 드릴게요.",
    "casualUS": "Bummer we're short on time today. If you can swing by tomorrow morning, I'll do a proper cupping for you.",
    "formalEn": "It is a pity we are short on time today. Should you be able to return tomorrow morning, I would be glad to arrange a proper cupping for you.",
    "casualUK": "Shame we've not got more time today. If you can pop back tomorrow morning, I'll do a proper cupping for you.",
    "notes": "호주: 'tomorrow arvo'(내일 오후)도 흔함 · pop back / swing by = 다시 들르다"
  },
  {
    "id": 132,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "멜버른은 처음이에요.",
    "casualUS": "It's my first time in Melbourne.",
    "formalEn": "This is my first visit to Melbourne.",
    "casualUK": "It's my first time in Melbourne, actually.",
    "notes": "현지 발음은 '멜번'(MEL-bn)에 가까움 · Melburnian = 멜버른 사람"
  },
  {
    "id": 133,
    "topics": [
      "멜버른",
      "일상"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "어디서 오셨어요?",
    "casualUS": "Where are you from?",
    "formalEn": "May I ask where you are from?",
    "casualUK": "Where are you from, then?",
    "notes": "호주: Where are you based? (어디서 일하세요/활동하세요?)도 행사에서 흔함"
  },
  {
    "id": 134,
    "topics": [
      "멜버른",
      "일상"
    ],
    "difficulty": "쉬움",
    "meaningKo": "멜버른 날씨는 진짜 하루에도 몇 번씩 바뀌네요.",
    "casualUS": "The weather here changes like five times a day!",
    "formalEn": "The weather in Melbourne certainly changes several times a day.",
    "casualUK": "The weather here can't make its mind up, can it?",
    "notes": "호주: Four seasons in one day! (멜버른 날씨를 두고 하는 유명한 말)"
  },
  {
    "id": 135,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "쉬움",
    "meaningKo": "시차는 거의 없는데, 밤 비행기를 타고 와서 좀 피곤해요.",
    "casualUS": "There's barely any time difference, but I took the red-eye, so I'm pretty wiped.",
    "formalEn": "The time difference is minimal, but I took an overnight flight and am rather tired.",
    "casualUK": "There's hardly any time difference, but I came on the overnight flight, so I'm a bit knackered.",
    "notes": "한국–멜버른 시차는 1시간(호주 서머타임 기간엔 2시간) · 호주: I'm stuffed / knackered = 녹초"
  },
  {
    "id": 136,
    "topics": [
      "멜버른",
      "문화"
    ],
    "difficulty": "쉬움",
    "meaningKo": "멜버른 사람들은 정말 커피에 진심인 것 같아요.",
    "casualUS": "People in Melbourne are seriously into their coffee.",
    "formalEn": "Melburnians clearly take their coffee very seriously.",
    "casualUK": "Melbourne people are properly serious about their coffee.",
    "notes": "호주: They're mad about their coffee here. / 'coffee snobs'라는 농담도 흔함"
  },
  {
    "id": 137,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "쉬움",
    "meaningKo": "이 근처에 꼭 가 봐야 할 카페나 브런치 집 추천해 주실 수 있어요?",
    "casualUS": "Any must-visit cafés or brunch spots around here you'd recommend?",
    "formalEn": "Could you recommend any cafés or brunch places nearby that are worth visiting?",
    "casualUK": "Are there any cafés or brunch places round here I really shouldn't miss?",
    "notes": "호주 답 예: You've gotta check out the laneways in the CBD. · CBD = 도심 · brekkie = 아침 식사 · smashed avo = 아보카도 토스트"
  },
  {
    "id": 138,
    "topics": [
      "멜버른",
      "문화"
    ],
    "difficulty": "어려움",
    "meaningKo": "여기 와 보니까 플랫화이트가 왜 호주 대표 메뉴인지 알겠어요.",
    "casualUS": "Now that I'm here, I totally get why the flat white is such an Aussie thing.",
    "formalEn": "Having arrived here, I now understand why the flat white is regarded as an Australian signature.",
    "casualUK": "Being here, I can totally see why the flat white's such a big deal in Australia.",
    "notes": "Aussie = 호주의/호주 사람 · 플랫화이트는 호주와 뉴질랜드가 서로 원조라고 주장하는 메뉴"
  },
  {
    "id": 139,
    "topics": [
      "멜버른",
      "문화"
    ],
    "difficulty": "어려움",
    "meaningKo": "이번 주말에 풋볼 경기 보러 가세요? 저도 한번 경험해 보고 싶어요.",
    "casualUS": "Are you going to the Aussie rules game this weekend? I'd love to check one out.",
    "formalEn": "Will you be attending the football match this weekend? I would very much like to experience one.",
    "casualUK": "Are you off to the footy this weekend? I'd love to see a match.",
    "notes": "멜버른에서 footy = AFL(호주식 풋볼) · 'Who do you barrack for?' = 어느 팀 응원해요? (barrack for = 응원하다, 호주 특유)"
  },
  {
    "id": 140,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "어려움",
    "meaningKo": "주말에 뭐 하세요? 저는 행사 끝나고 그레이트 오션 로드에 가 볼까 해요.",
    "casualUS": "Any plans for the weekend? I'm thinking of driving the Great Ocean Road after the show.",
    "formalEn": "Do you have any plans for the weekend? I am considering visiting the Great Ocean Road after the event.",
    "casualUK": "Got anything planned for the weekend? I'm thinking of doing the Great Ocean Road after the show.",
    "notes": "호주: What are you up to on the weekend? (호주·미국 on the weekend / 영국 at the weekend)"
  },
  {
    "id": 141,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "쉬움",
    "meaningKo": "커피 정말 맛있네요! 원두 어디 거 쓰세요?",
    "casualUS": "This coffee's amazing! Whose beans are you using?",
    "formalEn": "This coffee is excellent. May I ask which roaster supplies your beans?",
    "casualUK": "This coffee's brilliant! Whose beans are these?",
    "notes": "호주: This is unreal! (= 끝내준다) · Who's your roaster? (원두 어디 거예요?)"
  },
  {
    "id": 142,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "여기는 우유 음료 비중이 높아서, 에스프레소 블렌드를 설계할 때도 우유와의 밸런스를 먼저 생각하게 되네요.",
    "casualUS": "Since milk drinks are so big here, you really have to design your espresso blend around how it tastes with milk.",
    "formalEn": "Given the prevalence of milk-based drinks here, the balance with milk must be the first consideration when designing an espresso blend.",
    "casualUK": "With milk drinks being so popular here, you've really got to build your espresso blend around how it goes with milk.",
    "notes": "호주 카페 주문은 flat white·latte·cappuccino 같은 우유 음료 비중이 매우 높음"
  },
  {
    "id": 143,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "쉬움",
    "meaningKo": "어느 로스터리에서 일하세요?",
    "casualUS": "Which roastery are you with?",
    "formalEn": "Which roastery do you work for?",
    "casualUK": "Which roastery are you at?",
    "notes": "호주: Who are you roasting for? 라고도 물음"
  },
  {
    "id": 144,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "혹시 어떤 로스터기 쓰세요? 저희는 15kg 드럼 로스터를 써요.",
    "casualUS": "What roaster are you guys running? We've got a 15-kilo drum.",
    "formalEn": "May I ask which roaster you use? We operate a 15-kilogram drum roaster.",
    "casualUK": "What roaster are you using? We've got a 15-kilo drum.",
    "notes": "호주: What are you roasting on? (무슨 로스터기로 볶아요?)"
  },
  {
    "id": 145,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "호주 카페들은 보통 원두를 얼마나 숙성시킨 다음에 쓰나요?",
    "casualUS": "How long do cafés here usually rest their beans before using them?",
    "formalEn": "How long do Australian cafés typically rest their coffee before use?",
    "casualUK": "How long do cafés here tend to rest their beans before they use them?",
    "notes": "rest = (로스팅 후 원두를) 숙성시키다 · roast date = 로스팅 날짜"
  },
  {
    "id": 146,
    "topics": [
      "멜버른",
      "직장"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "나중에 서로 원두를 바꿔서 커핑해 보면 재밌을 것 같아요. 협업 얘기도 해 볼 수 있고요.",
    "casualUS": "It'd be fun to swap beans and cup each other's coffees sometime. Maybe even talk about a collab.",
    "formalEn": "It would be interesting to exchange coffees and cup them together at some point, and perhaps explore a collaboration.",
    "casualUK": "It'd be great to swap beans and cup each other's stuff at some point. Maybe even chat about a collab.",
    "notes": "호주: Keen to catch up! (keen = 하고 싶은) · collab = collaboration"
  },
  {
    "id": 147,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "아주어려움",
    "meaningKo": "호주 바리스타 대회 수준이 높다고 들었는데, 요즘은 어떤 가공 방식이 트렌드예요?",
    "casualUS": "I've heard the barista comps here are super competitive. What processing methods are trending right now?",
    "formalEn": "I understand that barista competitions in Australia are highly competitive. Which processing methods are currently popular?",
    "casualUK": "I've heard the barista comps over here are really high level. What processes are people into at the moment?",
    "notes": "comp = competition (호주에서 매우 흔한 줄임말)"
  },
  {
    "id": 148,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "플랫화이트 한 잔 주세요. 가져갈게요.",
    "casualUS": "Can I get a flat white to go, please?",
    "formalEn": "May I have a flat white to take away, please?",
    "casualUK": "Could I get a flat white to take away, please?",
    "notes": "호주: Can I grab a flat white, takeaway? · to go보다 takeaway가 기본 · 'Having here?' = 드시고 가세요?"
  },
  {
    "id": 149,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "여기서 마시고 갈게요. 카드 결제 되죠?",
    "casualUS": "For here, please. Do you take card?",
    "formalEn": "I will have it here, please. Do you accept card payments?",
    "casualUK": "I'll have it in, please. Can I pay by card?",
    "notes": "호주: Having it here. · 대부분 tap(카드 터치) 결제 · 공휴일(일부는 주말) surcharge가 붙는 카페가 많음"
  },
  {
    "id": 150,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "쉬움",
    "meaningKo": "롱블랙 하나랑 오트 라떼 하나 주세요.",
    "casualUS": "Can I get an Americano and an oat latte?",
    "formalEn": "Could I please have a long black and an oat milk latte?",
    "casualUK": "Could I have an Americano and an oat latte, please?",
    "notes": "호주: long black = 뜨거운 물 위에 에스프레소를 부은 것(아메리카노와 비슷, 크레마 유지) · 호주 카페엔 Americano가 메뉴에 없는 곳도 많음"
  },
  {
    "id": 151,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "쉬움",
    "meaningKo": "우유는 오트 밀크로 바꿔 주시고, 좀 뜨겁게 해 주세요.",
    "casualUS": "Can you do oat milk and make it extra hot?",
    "formalEn": "Could I have that with oat milk, and extra hot, please?",
    "casualUK": "Could I get that with oat milk, extra hot please?",
    "notes": "호주: Oat flat white, extra hot, thanks. · skinny = 저지방 우유 · Ta = 고마워요"
  },
  {
    "id": 152,
    "topics": [
      "멜버른",
      "커피"
    ],
    "difficulty": "어려움",
    "meaningKo": "매직 한 잔 주세요. 멜버른에만 있는 메뉴라고 들었어요.",
    "casualUS": "Can I get a magic? I heard it's a Melbourne thing.",
    "formalEn": "I would like a magic, please. I understand it is a Melbourne specialty.",
    "casualUK": "Could I have a magic, please? I've heard it's a Melbourne thing.",
    "notes": "magic = 더블 리스트레토에 스팀 우유를 부은 작은 잔(약 160ml)의 멜버른 메뉴 · 플랫화이트보다 진함"
  },
  {
    "id": 153,
    "topics": [
      "멜버른",
      "여행"
    ],
    "difficulty": "어려움",
    "meaningKo": "제 텀블러에 담아 주실 수 있나요?",
    "casualUS": "Could you put it in my travel mug?",
    "formalEn": "Would you mind serving it in my reusable cup?",
    "casualUK": "Could you do it in my reusable cup?",
    "notes": "호주: Can you do it in my KeepCup? (KeepCup = 멜버른에서 시작된 리유저블 컵 브랜드, 일반명사처럼 씀)"
  },
  {
    "id": 154,
    "topics": [
      "멜버른",
      "관용구"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "(인사) 잘 지내요? 어떻게 지내세요?",
    "casualUS": "How's it going?",
    "formalEn": "How are you?",
    "casualUK": "You all right?",
    "notes": "호주: How ya going? / How are you going? → 대답은 'Good, thanks! You?' (going = '가다' 아님)"
  },
  {
    "id": 155,
    "topics": [
      "멜버른",
      "관용구"
    ],
    "difficulty": "아주쉬움",
    "meaningKo": "(고맙다는 말에) 별말씀을요, 괜찮아요.",
    "casualUS": "No problem!",
    "formalEn": "You are most welcome.",
    "casualUK": "No bother!",
    "notes": "호주: No worries! / Too easy! (부탁을 들어줄 때 '그럼요, 문제없어요'로도 씀)"
  },
  {
    "id": 156,
    "topics": [
      "멜버른",
      "관용구"
    ],
    "difficulty": "쉬움",
    "meaningKo": "오늘 오후에 부스에 다시 들를게요.",
    "casualUS": "I'll swing by the booth again this afternoon.",
    "formalEn": "I will return to the booth later this afternoon.",
    "casualUK": "I'll pop back to the stand this afternoon.",
    "notes": "호주: I'll come back this arvo. (arvo = afternoon) · 호주·영국 행사에서는 booth 대신 stand도 흔함"
  },
  {
    "id": 157,
    "topics": [
      "멜버른",
      "관용구"
    ],
    "difficulty": "쉬움",
    "meaningKo": "제 생각엔 이거 대박 날 것 같아요.",
    "casualUS": "I think this one's gonna be a hit.",
    "formalEn": "I believe this will prove very popular.",
    "casualUK": "I reckon this one'll be a hit.",
    "notes": "호주: I reckon... (= I think) 매우 흔함 · 'Heaps of people will love it' (heaps = 엄청 많이)"
  },
  {
    "id": 158,
    "topics": [
      "멜버른",
      "관용구"
    ],
    "difficulty": "쉬움",
    "meaningKo": "잘했어요! 대단하네요.",
    "casualUS": "Good for you! Nice work!",
    "formalEn": "Well done; congratulations.",
    "casualUK": "Nice one! Well done!",
    "notes": "호주: Good on ya! (칭찬·격려) · Stoked for you! (stoked = 무척 기쁜)"
  },
  {
    "id": 159,
    "topics": [
      "멜버른",
      "관용구"
    ],
    "difficulty": "어려움",
    "meaningKo": "(권유를 거절하며) 아뇨, 괜찮아요.",
    "casualUS": "Nah, I'm good, thanks.",
    "formalEn": "No, thank you; I am fine.",
    "casualUK": "No, you're all right, thanks.",
    "notes": "호주: Yeah, nah. = 아니(요) / Nah, yeah. = 응(그래) → 마지막 단어가 진짜 대답"
  },
  {
    "id": 160,
    "topics": [
      "멜버른",
      "관용구"
    ],
    "difficulty": "어려움",
    "meaningKo": "사람이 엄청 많네요. 꽉 찼어요.",
    "casualUS": "It's packed in here!",
    "formalEn": "The venue is extremely crowded.",
    "casualUK": "It's rammed in here!",
    "notes": "호주: It's chockers! (= chock-a-block, 꽉 찬) · heaps of people = 사람이 엄청 많은"
  },
  {
    "id": 161,
    "topics": [
      "멜버른",
      "관용구",
      "여행"
    ],
    "difficulty": "어려움",
    "meaningKo": "주유소에 들러서 커피랑 간단한 먹을 거 사 갈게.",
    "casualUS": "I'll stop at the gas station and grab a coffee and a snack.",
    "formalEn": "I will stop at the service station to buy a coffee and a light snack.",
    "casualUK": "I'll stop at the petrol station and grab a coffee and a snack.",
    "notes": "호주: servo = service station(주유소) · Maccas = 맥도날드 · bottle-o = 주류 판매점"
  }
];
