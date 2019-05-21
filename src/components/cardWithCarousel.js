import React from "react";
import PropTypes from "prop-types";
 
class CardWithCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return  (
            <div class="max-w-l rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{this.props.title}</div>
    <p class="text-gray-700 text-base">
    {this.props.description}
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">#winter</span>
  </div>
</div>
        );
                        
    }
}

CardWithCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardWithCarousel;
