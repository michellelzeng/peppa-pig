const empty = {};

const isArrayEqual = (array1 = [], array2 = []) => {
    if (array1 === array2) {
        return true;
    }

    // check one level deep
    return array1.length === array2.length &&
        array1.every((item, index) => item === array2[index]);
};

const isShallowEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    }

    const item1Keys = Object.keys(obj1).sort();
    const item2Keys = Object.keys(obj2).sort();

    // are keys equal?
    if (!isArrayEqual(item1Keys, item2Keys)) {
        return false;
    }

    // are the values equal?
    const areValuesEqual = item2Keys.every(key => {
        const value = obj1[key];
        const nextValue = obj2[key];

        if (value === nextValue) {
            return true;
        }

        return Array.isArray(nextValue) &&
            Array.isArray(value) &&
            isArrayEqual(value, nextValue);
    });

    return areValuesEqual;
};

function shouldComponentUpdatePure(nextProps, nextState) {
    // turn undefined/nulls into empty objects so they can be compared with isShallowEqual
    nextProps = nextProps || empty;
    nextState = nextState || empty;
    const currentProps = this.props || empty;
    const currentState = this.state || empty;

    // false = do not update
    // true = need to update
    return !isShallowEqual(currentProps, nextProps) || !isShallowEqual(currentState, nextState);
}

export default function (component) {
    component.prototype.shouldComponentUpdate = shouldComponentUpdatePure;
};