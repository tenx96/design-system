import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab, Text, Pills } from '@/index';

// CSF format story
export const customLabels = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab
        className="pl-5"
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 0 ? 'primary' : 'secondary'}>12</Pills>
            </div>
            <Text appearance={activeIndex !== 0 ? 'subtle' : 'link'}>All</Text>
          </>
        }
      >
        <div>All</div>
      </Tab>
      <Tab
        className="pl-5"
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 1 ? 'primary' : 'secondary'}>2</Pills>
            </div>
            <Text appearance={activeIndex !== 1 ? 'subtle' : 'link'}>Tab(Recommended)</Text>
          </>
        }
      >
        <div>Tab(Recommended)</div>
      </Tab>
      <Tab
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 2 ? 'primary' : 'secondary'}>20</Pills>
            </div>
            <Text appearance={activeIndex !== 2 ? 'subtle' : 'link'}>Extras</Text>
          </>
        }
        disabled={true}
      >
        <div>Extras</div>
      </Tab>
    </Tabs>
  );
};

const customCode = `() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    console.log(\`tab-change: \${tabIndex}\`)();
  };

  return (
    <Tabs
      activeIndex={activeIndex}
      onTabChange={onTabChangeHandler}
      className="mb-6"
    >
      <Tab
        className="pl-5"
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 0 ? 'primary' : 'secondary'}>02</Pills>
            </div>
            <Text appearance={activeIndex !== 0 ? 'subtle' : 'link'}>All</Text>
          </>
        }
      >
        <div>
          All
        </div>
      </Tab>
      <Tab
        className="pl-5"
        label={(
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 1 ? 'primary' : 'secondary'}>2</Pills>
            </div>
            <Text appearance={activeIndex !== 1 ? 'subtle' : 'link'}>Tab(Recommended)</Text>
          </>
        )}
      >
        <div>
          Tab(Recommended)
        </div>
      </Tab>
      <Tab
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 2 ? 'primary' : 'secondary'}>20</Pills>
            </div>
            <Text appearance={activeIndex !== 2 ? 'subtle' : 'link'}>Extras</Text>
          </>
        }
        disabled={true}
      >
        <div>
          Extras
        </div>
      </Tab>
    </Tabs>
  );
}`;

export default {
  title: 'Navigation/Tabs/Custom Labels',
  component: Tabs,
  subcomponents: { Tab },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
