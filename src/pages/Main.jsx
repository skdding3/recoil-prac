import React, {useEffect} from 'react';
import dummyData from "../model/dummyData";
import {repos as reposAtom} from '../atoms/atoms'
import { useRecoilState } from "recoil";
import axios from "axios";




const Main = () => {
    // STATE
    const [repos, setRepos] = useRecoilState(reposAtom);

    // EFFECT
    useEffect(() => {
        // const getRepos = async () => {
        //     try {
        //         // const url = dummyData
        //         // const res = await fetch(url)
        //         // const body = await res.json()
        //         setRepos(dummyData)
        //         // console.log(body)
        //     } catch (err) {
        //         console.log(err)
        //     }
        // };
        //
        // getRepos()

        setRepos(dummyData)
    },[])



    return repos.map((repo) => (
        <div key={repo.id}>
            <p href={repo.price}>
                {repo.title} ${repo.price}
                <br />
                {repo.description}
            </p>
        </div>
    ))
};


export default Main;
