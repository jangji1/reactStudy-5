import React from 'react';

const tabList = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, nemo.',
    'Suscipit odio, vel, dolore modi nemo similique. Alias sint, qui.',
    'Saepe odio dolores reiciendis repellendus, harum eum beatae perspiciatis quas.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, voluptate!'
];

const Tabs = ({
    focused,
    changeTab
}) => (
    <ul>
        {tabList.map((tab, i) => (
            <li
                key={`tabList${i}`}
                onClick={() => changeTab(i)}
            >
                <p>#{i}</p>
                <p style={{
                    display: i === focused ? 'block' : 'none'
                }}>{tab}</p>
            </li>
        ))}
    </ul>
);

export default Tabs;
