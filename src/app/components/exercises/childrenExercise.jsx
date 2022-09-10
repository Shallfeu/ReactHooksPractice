import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <div>
                {index}. {child}
            </div>
        );
    });
};

ChildrenComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ChildrenComponent>
                <Component />
                <Component />
                <Component />
            </ChildrenComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <span>Компонент списка</span>;
};

export default ChildrenExercise;
