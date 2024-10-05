import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const commitlintConfig: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            RuleConfigSeverity.Error,
            'always',
            [
                'feat',
                'fix',
                'style',
                'patch',
                'docs',
                'refactor',
                'build',
                'revert',
            ],
        ],
    },
};

export default commitlintConfig;
