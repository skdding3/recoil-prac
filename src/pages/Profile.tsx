import React, {useRef, useState, useEffect} from 'react';
import {atom, useRecoilState} from 'recoil'

const ageAtom = atom({
    key: 'atom',
    default: 20
})


const Profile = () => {
    // STATE, REF
    const [age, setAge] = useRecoilState(ageAtom);
    const prevAgeRef = useRef(20)

    // EFFECT
    useEffect(() => {
        prevAgeRef.current= age;
    }, [])

    const prevAge = prevAgeRef.current;
    const text = age === prevAge ? '같음' : age > prevAge ? '늙음' : '젊음';

    return (
        <div>
            <p>{`나이가 ${age} 살은 나이가 ${prevAge} 살보다 ${text}`}</p>
            <button onClick={() => {
                const age = Math.floor(Math.random() * 50 + 1);
                setAge(age)
            }}
            >
                나이변경
            </button>
        </div>
    );
}

export default Profile;
