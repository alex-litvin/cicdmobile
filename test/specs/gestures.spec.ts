describe('gestures', () => {
    
    it('swipe', async () => {
       let startx = 600
       let starty = 1000
       let endx = 100
       let endy = 1000

        await browser.action('pointer', {
        parameters: { pointerType: 'touch' } 
    })
        .move({x:startx, y:starty})
        .down()
        .pause(300)
        .move({duration:3500, x:endx, y:endy})
        .pause(200)
        .up()
        .perform()

    });

    
    
});