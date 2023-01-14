const drinks = [
  
    // Classics
    {id: 1, name: "Original Flavor", price: 4.99, image: "original.png", category: "Classic", description: "It's the ideal combo of the right ingredients in the right proportion to get the job done like only Monster can. Carbonated Energy Drink with Caffeine Ginseng and B Vitamins Contains sugars and sweeteners Serve cold for maximum refreshment. Tastes like an Otter Pop, fizzy, hints of apple"},
    {id: 2, name: "Absolutely Zero", price: 4.99, image: "absolutelyZero.png", category: "Classic", description: "Monster Energy Absolutely Zero is formulated with caffeine and B vitamins. Caffeine may contribute to increased concentration and alertness. Vitamins B2, B3, B6 and B12 may contribute to the reduction of tiredness and fatigue and to a normal energy-yielding metabolism."},
    {id: 3, name: "Low Carb", price: 4.99, image: "lowCarb.png", category: "Classic", description: "Lo-Carb Monster packs a powerful punch, and has a smooth easy drinking flavor with only 30 calories"},
    {id: 4, name: "Recover", price: 4.99, image: "recover.png", category: "Classic", description: "Rehab Monster's energy tea flavors combine brewed tea, electrolytes, natural caffeine, and our Monster energy blend for rehydration and recovery."},
    
  
    // Java
    {id: 5, name: "Irish Blend", price: 7.99, image: "javaIrishBlend.png", category: "Java", description: "Monster Java Irish Blend is a unique blend of Irish coffee with cream and of course topped off with the Blend of Monster energy drink."},
    {id: 6, name: "Kona Blend", price: 7.99, image: "javaKonaBlend.png", category: "Java", description: "Monster Java is premium coffee and milk brewed to perfection, supercharged with the Monster Energy blend. Monster Java Kona Blend is a dark roasted Kona coffee!"},
    {id: 7, name: "Mean Bean", price: 7.99, image: "javaMeanBean.png", category: "Java", description: "Premium coffee and cream brewed up with killer flavor, supercharged with Monster energy blend. Coffee done the Monster way, wide open, with a take no prisoners attitude and the experience and know-how to back it up."},
    {id: 8, name: "Oatmilk", price: 7.99, image: "javaOatmilk.png", category: "Java", description: "Light, smooth with robust coffee flavor with a hint of hearty oats. It's never been easier to go guilt free!"},
    {id: 9, name: "Salted Caramel", price: 7.99, image: "javaSaltedCaramel.png", category: "Java", description: "Premium coffee and cream brewed up with killer flavor, supercharged with Monster energy blend. Coffee done the Monster way, wide open, with a take no prisoners attitude and the experience and know-how to back it up."},
  
    // Juice
    {id: 10, name: "Aussie Lemonade", price: 9.99, image: "juiceAussieLemonade.png", category: "Juice", description: "Monster's twist on classic lemonade, we hit the ideal balance of tart and sweet with a burst of fresh citrus flavor. As always, it's chockers with our world-famous Monster Energy Blend."},
    {id: 11, name: "Khaotic", price: 9.99, image: "juiceKhaotic.png", category: "Juice", description: "Combining great-tasting real juice with energy drink functionality and attitude. A juice blend to create a taste that is better experienced than described. Of course, our Monster Energy DNA remains unchanged."},
    {id: 12, name: "Mango Loco", price: 9.99, image: "juiceMangoLoco.png", category: "Juice", description: "Carbonated fruit energy drink with taurine, caffeine, L-carnitine and B vitamins, with sugars and sweetener. Contains fruit juice from concentrate."},
    {id: 13, name: "Pacific Punch", price: 9.99, image: "juicePacificPunch.png", category: "Juice", description: "Pacific Punch is made with a blend of fruit juices meaning it doesn't taste like traditional energy drinks. Tropical flavours made up of apple, orange, raspberry, cherry, pineapple and passionfruit juices, it tastes like a tropical punch with all the buzz from Monster's Energy blend. Monster is… A Life Style in a Can."},
    {id: 14, name: "Pipeline Punch", price: 9.99, image: "juicePipelinePunch.png", category: "Juice", description: "The perfect blend of the best flavours Hawaii has to offer - passion fruit, orange & guava, then Monsterized with a full load of our famous energy blend. And, just like the wave is named for, it is destined to become a legend!"},
    {id: 15, name: "Pipeline Punch 2.0", price: 9.99, image: "juicePipelinePunch2.png", category: "Juice", description: "Refreshing taste of bubbling fruit juices with our Monster energy blend for energy drinks with tropical fruit punch flavors."},
   
    // Ultra
    {id: 16, name: "Ultra Black", price: 8.99, image: "ultraBlack.png", category: "Ultra", description: "A lighter tasting, less sweet, citrus flavor sparkling refreshment that is great for any occasion. - Monster Energy Ultra, sugar-free. Ultra has a refreshing taste and doesn't taste like traditional energy drinks and still has the full Monster energy blend."},
    {id: 17, name: "Ultra Blue", price: 8.99, image: "ultraBlue.png", category: "Ultra", description: "Monster Ultra Blue has zero sugar, but with all the flavor you're accustomed to and packed with our sugar-free Monster Energy blend. REFRESHING TASTE | Monster Ultra Blue offers a frosty, crisp blue raspberry flavor. Ultra Blue is great for any occasion."},
    {id: 18, name: "Ultra Gold", price: 8.99, image: "ultraGold.png", category: "Ultra", description: "Ultra Gold has a fresh pineapple taste and doesn't taste like traditional energy drinks, but has the full Monster energy blend. Has a refreshing taste and doesn't taste like traditional energy drinks and still has the full Monster energy blend."},
    {id: 19, name: "Ultra Paradise", price: 8.99, image: "ultraParadise.png", category: "Ultra", description: "Kiwi, Lime and a hint of cucumber. Lighter taste, light sweetness, sparkling refreshment to take you to Paradise. - Monster Energy Ultra Paradise, sugar-free."},
    {id: 20, name: "Ultra Peachy Keen", price: 8.99, image: "ultraPeachyKeen.png", category: "Ultra", description: "Monster Ultra Peachy Keen is a zero sugar, zero calorie energy drink with the refreshing flavor of fresh peaches."},
    {id: 21, name: "Ultra Watermelon", price: 8.99, image: "ultraWatermelon.png", category: "Ultra", description: "Monster Ultra Watermelon is a zero sugar, zero calorie energy drink with the flavor of fresh summertime watermelon."},
    {id: 22, name: "Ultra Zero", price: 8.99, image: "ultraZero.png", category: "Ultra", description: "A little less sweet; lighter-tasting, zero sugar, but with a full load of our Monster energy blend. Sure, white is the new black. We went all out: Monster Energy Zero Ultra."},
      
    // Special Edition
    {id: 23, name: "Lewis Hamilton", price: 11.99, image: "specialLewisHamilton.png", category: "Special Edition", description: "Monster LH44, inspired by the seven times world champion F1 Lewis Hamilton. With blue grape flavour and contains less sugar! Light, crisp and refreshing flavours with a fast finish."},
    {id: 24, name: "Punch Baller's Blend", price: 11.99, image: "punchBallersBlend.png", category: "Special Edition", description: "Ginseng + guarana + taurine Punch + energy DUB Edition Punch Monster is a new take on a classic. It's sweet like the punch you mixed yourself as a kid, but with a little carbonation for a smooth finish. Don't let the familiar taste fool you. Baller's Blend is high performance fuel that's optimized for the true baller."},
    {id: 25, name: "Punch Mixxd", price: 11.99, image: "punchMixxd.png", category: "Special Edition", description: "Carbonated energy drink with taurine, caffeine, L-carnitine and B vitamins. Contains sugars and sweeteners. This product is GMO, gluten and allergen free. Store in a cool and dry place."},
  ];
  
  const storeDrinksLS = (drinks) => {
    localStorage.setItem("drinks", JSON.stringify(drinks));
  }
  
  const loadDrinksLS = () => {
    return JSON.parse(localStorage.getItem("drinks")) || [];
  }
  
  storeDrinksLS(drinks);