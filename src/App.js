import React, {useEffect, useState} from 'react';
//import 'grapesjs/dist/css/grapes.min.css';
import './css/grapes.min.css';
import grapesjs from 'grapesjs';
import gsWebpage from 'grapesjs-preset-webpage'
import gsCustome from 'grapesjs-custom-code';
import gsTap from 'grapesjs-tabs';

import {TablePluginRef} from "./Table/consts";
import addTablePlugin from './Table';
import { ChartPluginRef } from "./Chart/consts";
import addChartPlugin from './Chart';


const App = () => {

    const [pluginLoaded, setPluginLoaded] = useState(false);
    const [editor] = useState(null);

    useEffect(() => {
        if (!pluginLoaded) {
            addTablePlugin();
            addChartPlugin();
            setPluginLoaded(true);
        }
        else if (!editor) {
          grapesjs.init({
            color:'white',
            height: '100vh',
            width: 'auto',
            container: "#g",
            fromElement: true,  
            plugins: [gsWebpage, gsCustome, gsTap, TablePluginRef, ChartPluginRef],
            storageManager: {
              type: 'remote',
              //urlStore: 'http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ',
              //urlLoad: 'http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ',
              autosave: false,
              autoload: true,
              contentTypeJson: true,
              storeComponents: true,
              allowScripts: 1,
              storeStyles: true,
              storeHtml: true,
              storeCss: true,
            },
          });
          editor.Storage.add('remote', {
            async load() {
              function getCookie(key) {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                  const [name, value] = cookies[i].split('=').map(c => c.trim());
                  if (name === key) {
                    return value;
                  }
                }
              }
              //return await axios.get(`projects/${projectId}`);
              //return await axios.get('https://database.com/', { headers: {"Authorization" : `Bearer ${JWTToken}`} });
              return await axios.get('https://database.com/', { headers: {"Authorization" : `Bearer ${getCookie("JWTToken")}`} });
            },
          
            async store(data) {
              function getCookie(key) {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                  const [name, value] = cookies[i].split('=').map(c => c.trim());
                  if (name === key) {
                    return value;
                  }
                }
              }
              //return await axios.patch(`projects/${projectId}`, { data });
              //return await axios.patch('https://database.com/', { headers: {"Authorization" : `Bearer ${JWTToken}`},"data":data });
              return await axios.patch('https://database.com/', { headers: {"Authorization" : `Bearer ${getCookie("JWTToken")}`},"data":data });
            },
          });
        }
    }, [editor, pluginLoaded]);


  return (
    <div id="g" className="h" />
  );
}

export default App;
