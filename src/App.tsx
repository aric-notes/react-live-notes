import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import code from './code.tsx?raw';
import React, { useState, useEffect, useRef, useReducer } from 'react';

function App() {
  return (
    <div className="mx-auto mt-20 w-1/2 flex-col rounded-md bg-slate-200 p-5 shadow-md y-2">
      <h1>Live Code Editor</h1>
      <LiveProvider
        code={code}
        scope={{ React, useState, useEffect, useRef, useReducer }}>
        <div className="y-2">
          <LiveError className="text-red-600" />
          <div className="grid grid-cols-2 gap-4">
            <LiveEditor className="font-mono" />
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}

export default App;
