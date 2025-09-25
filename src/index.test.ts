// import BiMap from 'bidirectional-map';
import { enumToBiMap } from './index';

enum AUDIT_RESULT {
  process = 'agree',
  error = 'disagree',
  wait = 'submit',
}

describe('Enum Utils Tests', () => {
    test('enumToBiMap should work correctly', () => {
      const result = enumToBiMap({
        [AUDIT_RESULT.process]: '通过',
        [AUDIT_RESULT.error]: '驳回',
        [AUDIT_RESULT.wait]: '提交',
      });
      
      console.log(result);
      // 添加你的断言
      expect(result).toHaveProperty('agree', '通过');
    });
  });

