if (Meteor.isClient) {
	Template.wishList.helpers({
        tools: [
            {name: "HTC Vive", upvotes: 5, price: 500, imageUrl: "http://www.androidcentral.com/sites/androidcentral.com/files/article_images/2015/03/htc-vive_0.jpg"},
            {name: "Perception Neuron 32 Neuron Kit", upvotes: 3, price: 1500, imageUrl: " http://cdn.crowdfundinsider.com/wp-content/uploads/2014/08/Perception-Neuron-2.jpg"}
        ]
	});
};