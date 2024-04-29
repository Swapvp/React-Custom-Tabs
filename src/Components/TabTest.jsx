import Tabs from "./Tabs";
import "./tabs.css";

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: (
        <div>
          <h1>Tab 1</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            accusantium quod temporibus laborum eaque, labore ipsa atque
            laboriosam ducimus quas perferendis alias dignissimos asperiores
            neque sapiente optio aut tenetur nam.
          </p>
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div>
          <h1>Tab 2</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            accusantium quod temporibus laborum eaque, labore ipsa atque
            laboriosam ducimus quas perferendis alias dignissimos asperiores
            neque sapiente optio aut tenetur nam.
          </p>
        </div>
      ),
    },
    {
      label: "Tab 3",
      content: (
        <div>
          <h1>Tab 3</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            accusantium quod temporibus laborum eaque, labore ipsa atque
            laboriosam ducimus quas perferendis alias dignissimos asperiores
            neque sapiente optio aut tenetur nam.
          </p>
        </div>
      ),
    },
    {
      label: "Tab 4",
      content: (
        <div>
          <h1>Tab 4</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            accusantium quod temporibus laborum eaque, labore ipsa atque
            laboriosam ducimus quas perferendis alias dignissimos asperiores
            neque sapiente optio aut tenetur nam.
          </p>
        </div>
      ),
    },
    {
      label: "Tab 5",
      content: (
        <div>
          <h1>Tab 5</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            accusantium quod temporibus laborum eaque, labore ipsa atque
            laboriosam ducimus quas perferendis alias dignissimos asperiores
            neque sapiente optio aut tenetur nam.
          </p>
        </div>
      ),
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
