/**
 * 영어 플래시카드 (BLACKUP COFFEE · 스페셜티 커피 로스터의 일·생활 영어)
 * difficulty: "아주쉬움" | "쉬움" | "어려움" | "아주어려움"
 * topics: 일상 | 직장 | 커피 | 여행 | 음식 | 감정 | 문화 | 시사 | 관용구 | 격식
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
  }
];
