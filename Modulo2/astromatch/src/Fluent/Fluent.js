import { provideFluentDesignSystem, fluentCard, fluentButton } from '@fluentui/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';




const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());

export const FluentCard = wrap(fluentCard());
export const FluentButton = wrap(fluentButton());
