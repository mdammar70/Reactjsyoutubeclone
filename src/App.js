import { Provider } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import WatchPage from "./components/WatchPage";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContent />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
