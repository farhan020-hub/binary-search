
// We need to import our BSTNode now.
import BSTNode from '../src/bst-node.js';

describe('binarySearchTree', () => {

  

    test('it should add a child node to the right of the root node', () => {
        let bst = new BST();
        let rootNode = new BSTNode(36);
        bst.insert(rootNode);
        let newNode = new BSTNode(48);
        bst.insert(newNode);
        expect(rootNode.right.data).toEqual(48);
  });
});