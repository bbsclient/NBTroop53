import React from "react"

class CalendarIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
//            <!-- Calendar Icon -->
            <div class="min-w-24 bg-white min-h-24 p-3 mb-4 font-medium">
              <div class="w-24 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
                <div class="block rounded-t overflow-hidden  text-center ">
                  <div class="bg-bsa-blue text-white py-1">
                    March
                  </div>
                  <div class="pt-1 border-l border-r border-white bg-white">
                    <span class="text-5xl font-bold leading-tight">
                      17
                    </span>
                  </div>
                  <div class="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                    <span class="text-sm">
                      Sunday
                    </span>
                  </div>
                  <div class="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                    <span class="text-xs leading-normal">
                      8:00 am to 5:00 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>             
        );
    } 
}

export default CalendarIcon;

