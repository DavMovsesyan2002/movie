//обычный javascript объект который реализует структуру 
export default {
    methods: {
        onScrollEnd(){
            console.warn('You must override onScrollEnd method');
        },
        onBodyScroll(event){
            
            const container = event.target;
            if(container.clientHeight + container.scrollTop >= container.scrollHeight){
                this.onScrollEnd()
                // this.isRulesReaded = true
            }else{
                this.isRulesReaded = false
            }
            //console.log("clientHeight-"+container.clientHeight +" scrollTop-"+ container.scrollTop+" scrollHeight"+container.scrollHeight);
        },
    },
}