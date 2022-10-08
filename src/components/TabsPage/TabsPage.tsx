import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getTabByID } from '../../utils/getTabByID';
import { Tabs } from '../Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId = '' } = useParams();
  const selectedTab = useMemo(() => {
    return getTabByID(tabs, tabId);
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
        />

        {selectedTab
          ? (
            <div className="block" data-cy="TabContent">
              {selectedTab.content}
            </div>
          )
          : (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )}
      </div>
    </>
  );
};