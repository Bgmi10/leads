class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleGroundnutOil = () => {
    const message = this.createChatBotMessage("We offer high-quality groundnut oil. Would you like more details?");
    this.updateChatbotState(message);
  };

  handleSesameOil = () => {
    const message = this.createChatBotMessage("Our sesame oil is pure and organic. Would you like more information?");
    this.updateChatbotState(message);
  };

  handleCoconutOil = () => {
    const message = this.createChatBotMessage("Our coconut oil is perfect for cooking and skincare. Interested?");
    this.updateChatbotState(message);
  };

  handleDeepamOil = () => {
    const message = this.createChatBotMessage("We have traditional deepam oil for rituals. Need more details?");
    this.updateChatbotState(message);
  };

  handlePrice = () => {
    const message = this.createChatBotMessage("You can find the prices of our products on the product pages. Can I help with anything else?");
    this.updateChatbotState(message);
  };

  handleShipping = () => {
    const message = this.createChatBotMessage("We offer fast shipping across the country. Would you like to know the shipping rates?");
    this.updateChatbotState(message);
  };

  handleReturnPolicy = () => {
    const message = this.createChatBotMessage("We have a 30-day return policy. Would you like to know the details?");
    this.updateChatbotState(message);
  };

  handleDiscounts = () => {
    const message = this.createChatBotMessage("We have special discounts for bulk orders. Would you like to know more?");
    this.updateChatbotState(message);
  };

  handleAvailability = () => {
    const message = this.createChatBotMessage("You can check product availability on the product pages. Would you like to know more?");
    this.updateChatbotState(message);
  };

  handleStoreHours = () => {
    const message = this.createChatBotMessage("Our store is open from 9 AM to 8 PM, Monday through Saturday. Is there anything else you need help with?");
    this.updateChatbotState(message);
  };

  handleContactSupport = () => {
    const message = this.createChatBotMessage("You can reach our support team at support@example.com or call us at 123-456-7890. How else can I assist you?");
    this.updateChatbotState(message);
  };

  handleOrderStatus = () => {
    const message = this.createChatBotMessage("You can track your order status on our website. If you need any specific help, let me know!");
    this.updateChatbotState(message);
  };

  handlePayment = () => {
    const message = this.createChatBotMessage("For payment-related questions, please check our payment methods page or contact our support team for assistance.");
    this.updateChatbotState(message);
  };

  handleAccount = () => {
    const message = this.createChatBotMessage("You can manage your account settings on the account page. If you need help with something specific, just ask!");
    this.updateChatbotState(message);
  };

  handleRecommendations = () => {
    const message = this.createChatBotMessage("I can help you find the perfect product based on your needs. Let me know what you're looking for!");
    this.updateChatbotState(message);
  };

  handleUnknown = () => {
    const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Could you please rephrase?");
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
