# react-bootstrap-chat-ui
A modern and responsive web-based chat application built using React and Bootstrap 5. The application features a collapsible sidebar, customizable chat window with message bubbles, and a toggleable right-hand section for additional information or settings. Users can switch between multiple themes to personalize their experience.

## Features

- **Collapsible Sidebar**: The sidebar can shrink to display only icons, saving screen space while retaining essential functionality. It includes user profile information, a status indicator, a search bar, and a contacts list.
  
- **Customizable Themes**: Users can choose from various color themes (e.g., Light, Dark, Blue, Green, Purple) via the theme selector in the top navigation bar. The selected theme is applied across the application, including the sidebar, chat window, and navbar.

- **Message Bubbles**: Messages in the chat window are displayed as bubbles, enhancing readability and mimicking popular messaging apps. Emojis can be inserted into messages via a dedicated emoji button.

- **Right-Hand Toggleable Section**: A section on the right-hand side of the app that can be toggled in and out of view. This section can be used to display additional information, settings, or any other relevant content.

- **Responsive Design**: The application is fully responsive and optimized for both desktop and mobile devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap 5**: A CSS framework for responsive and modern web design.
- **React Icons**: A collection of icons for React, used in the sidebar and toggle buttons.
- **CSS Variables**: For theming and ensuring consistency across the application.

## Getting Started

To get started with ChatApp, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/cogniverse-net/react-bootstrap-chat-ui.git
    cd react-bootstrap-chat-ui
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **View the application**:
    Open your browser and navigate to `http://localhost:3000` to view the app.

## Project Structure

- `src/`
  - `components/`
    - `Sidebar.js`: The collapsible sidebar component.
    - `ChatWindow.js`: The main chat window where messages are displayed.
    - `RightSection.js`: The toggleable right-hand section.
  - `styles/`
    - `Sidebar.css`: Styling specific to the sidebar component.
    - `ChatApp.css`: Global styling for the ChatApp.
    - `themes.css`: Theme variables for the application.
  - `App.js`: Main entry point for the application.

## Future Enhancements

- **Notification System**: Adding real-time notifications for new messages.
- **User Authentication**: Implementing user login and registration functionalities.
- **File Sharing**: Allowing users to share files and images within the chat.
- **Group Chats**: Enabling group conversations with multiple participants.

## Contributing

Contributions are welcome! If you have ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

