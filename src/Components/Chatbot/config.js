import { createChatBotMessage } from 'react-chatbot-kit';
import ProductOptions from './ProductOption';

const config = {
  botName: "Leads Bot",
  initialMessages: [
    createChatBotMessage("Hello! Welcome to Leads . How can I help you today?", {
      widget: "productOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "productOptions",
      widgetFunc: (props) => <ProductOptions {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "black",
    },
    chatButton: {
      backgroundColor: "black",
    },
  },
};

export default config;