/*
 * @Description: 默认模版-面包屑组件
 * @Author: 王振
 * @Date: 2021-09-29 09:59:53
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-29 10:17:36
 */
import React from 'react';
import moduleCss from './BreadCrumbs.module.less';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import routes from '@/router';
import { Breadcrumb } from 'antd';
import { flattenRoutes } from '@/utils/toolFunc';

const allRoutes = flattenRoutes(routes); //  以递归的方式展平react router数组

interface Props {
  breadcrumbs: any[];
}

const BreadCrumbs: React.FC<Props> = ({ breadcrumbs }) => {
  // const history = useHistory();
  return (
    <Breadcrumb className={moduleCss.bread_crumb}>
      {breadcrumbs.map((item) => {
        return <Breadcrumb.Item key={item.key}>{item.name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default withBreadcrumbs(allRoutes)(BreadCrumbs);
