import { useState } from 'react';
import Cover from '../../Components/Cover';
import orderImage from '../../assets/image-5.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
const OrderPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Cover
                img={orderImage}
                title={"Our Shop"}
            ></Cover>
            <section>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                      <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default OrderPage;