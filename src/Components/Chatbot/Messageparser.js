class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (this.containsKeywords(lowerCaseMessage, ["groundnut oil"])) {
      this.actionProvider.handleGroundnutOil();
    } else if (this.containsKeywords(lowerCaseMessage, ["sesame oil"])) {
      this.actionProvider.handleSesameOil();
    } else if (this.containsKeywords(lowerCaseMessage, ["coconut oil"])) {
      this.actionProvider.handleCoconutOil();
    } else if (this.containsKeywords(lowerCaseMessage, ["deepam oil"])) {
      this.actionProvider.handleDeepamOil();
    } else if (this.containsKeywords(lowerCaseMessage, ["price", "cost", "rate"])) {
      this.actionProvider.handlePrice();
    } else if (this.containsKeywords(lowerCaseMessage, ["shipping", "delivery", "postage"])) {
      this.actionProvider.handleShipping();
    } else if (this.containsKeywords(lowerCaseMessage, ["return", "refund", "return policy", "refund policy"])) {
      this.actionProvider.handleReturnPolicy();
    } else if (this.containsKeywords(lowerCaseMessage, ["discount", "offer", "promotion"])) {
      this.actionProvider.handleDiscounts();
    } else if (this.containsKeywords(lowerCaseMessage, ["availability", "in stock", "stock"])) {
      this.actionProvider.handleAvailability();
    } else if (this.containsKeywords(lowerCaseMessage, ["store hours", "opening hours", "business hours"])) {
      this.actionProvider.handleStoreHours();
    } else if (this.containsKeywords(lowerCaseMessage, ["contact", "support", "customer service"])) {
      this.actionProvider.handleContactSupport();
    } else if (this.containsKeywords(lowerCaseMessage, ["order status", "track order", "order tracking"])) {
      this.actionProvider.handleOrderStatus();
    } else if (this.containsKeywords(lowerCaseMessage, ["payment", "transaction", "billing"])) {
      this.actionProvider.handlePayment();
    } else if (this.containsKeywords(lowerCaseMessage, ["account", "profile", "settings"])) {
      this.actionProvider.handleAccount();
    } else if (this.containsKeywords(lowerCaseMessage, ["product recommendation", "suggestion", "help choosing"])) {
      this.actionProvider.handleRecommendations();
    } else {
      this.actionProvider.handleUnknown();
    }
  }

  containsKeywords(message, keywords) {
    return keywords.some(keyword => message.includes(keyword));
  }
}

export default MessageParser;
