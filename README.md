# React QR Reader MultiFormatReader

**Attention!!!!**

This repository and library is fork from here https://github.com/JodusNodus/react-qr-reader

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Example Usage](#example-usage)
- [QrReader API](#component-api)
- [Maintainers](#maintainers)
- [License](#license)

## Use Case

You need a component for Scanning QR codes and Barcodes from a web browser based app.
This project uses the zxing library with all its supported formats. (See https://github.com/zxing/zxing)

## Compatibility

This component has been tested in the following browsers:

- Chrome Mac OS & Android
- Firefox Mac OS & Android
- Safari Mac OS & IOS

Since this library does internal use of hooks you need `React >= 16.8.0`.

## Example Usage

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

```javascript
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader_multiformatreader';

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};
```

## Component API

The `QrReader` component has the following props:

| Properties          | Types                                                                                           | Default Value                   | Description                                              |
| ------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------- |
| constraints         | [MediaTrackConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints) | `{ facingMode: 'environment' }` | Specify which camera should be used (if available).      |
| onResult            | `function`                                                                                      | none                            | Scan event handler                                       |
| videoId             | `string`                                                                                        | `video`                         | The ID for the video element                             |
| scanDelay           | `number`                                                                                        | `500`                           | The scan period for the QR hook                          |
| ViewFinder          | component                                                                                       | none                            | ViewFinder component to rendering over the video element |
| className           | string                                                                                          | none                            | ClassName for the container element.                     |
| containerStyle      | object                                                                                          | none                            | Style object for the container element.                  |
| videoContainerStyle | object                                                                                          | none                            | Style object for the video container element.            |
| videoStyle          | object                                                                                          | none                            | Style object for the video element.                      |

## Maintainers

- Current Maintainers [@MMischke1892](https://github.com/MMischke1892)

- Original Author [@JodusNodus](https://github.com/JodusNodus)

## Work on repository

Node.js <= v16.
yarn install
yarn run storybook
check it on phone on same network with https:

- generate certificate: openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout localhost.key -out localhost.crt
- run storybook: yarn start-storybook -p 6006 --https --ssl-cert ./localhost.crt --ssl-key ./localhost.key

## License

The MIT License (MIT)

Copyright (c) 2018 Thomas Billiet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
