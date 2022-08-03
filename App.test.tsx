
import App from './App';
import { React, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FcSpeaker} from 'react-icons/fc';
import { render,screen} from "@testing-library/react";
import { Axios } from 'axios';


const data={
  SearchBox {
    setsearchWord(e.target.value);
  }
}

describe('test information component',()=>{
  test("render information content",()=>{
    render(<Information data={data}/>);

  });
});

describe("test input field component",()=>{
  test('render input field component',()=>{
    const SearchBoxField={
      onChange=jest.fn(),
      className="SearchBox",
      placeHolder="Search",
    };
    render(<SearchBox {..SearchBoxField}/>);
    screen.debug();
  })
})