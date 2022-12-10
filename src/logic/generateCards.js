export function generateCards(){
    const cards = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const areas = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12", "div13", "div14", "div15"];
    let occupiedAreas = [];

    numbers.forEach((number) => {
        let randomArea = areas[Math.floor(Math.random() * areas.length)]

        while(occupiedAreas.includes(randomArea)){
            randomArea = areas[Math.floor(Math.random() * areas.length)]
        }
        
        occupiedAreas.push(randomArea);
        cards.push({ number, area: randomArea });
    });

    return cards;
}