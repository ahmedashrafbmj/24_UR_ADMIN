// import React from 'react'

import {
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import React, { useMemo } from 'react';
// const Context = React.createContext({
//     name: 'Default',
// });

const Notification = () => {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement) => {
      api.info({
        message: `Notification ${placement}`,
        // description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
        description:"ahmed",
        placement,
      });
    };



    return (
        <>
            <h1>notification</h1>
            {/* <Button type="primary" onClick={() => openNotification('topRight')}> */}
                <RadiusUprightOutlined />
                {/* topRight
            </Button> */}
        </>
    )
}

export default Notification