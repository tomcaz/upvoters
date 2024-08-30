import renderer from 'react-test-renderer'
import UpVoteContainer from './'

const item = renderer.create(
    <UpVoteContainer />
)

it('empty list', () => {
    let tree = item.toJSON();
    expect(tree.children[2].children).toBeNull()
})

it('add a vote list', () => {
    let tree = item.toJSON();
    renderer.act(() =>
        tree.children[1].props.onClick())
    tree = item.toJSON();
    expect(tree.children[2].children[0].children.length).toBeGreaterThan(0)
})

it('add a vote to the list and color default black', () => {
    let tree = item.toJSON();
    renderer.act(() =>
        tree.children[1].props.onClick())
    tree = item.toJSON();
    renderer.act(() =>
        tree.children[2].children[0].children[1].children[0].props.onClick())
    tree = item.toJSON();

    expect(tree.children[2].children[0].children[0].children[0].children[0].props.style.backgroundColor).toEqual('#F4F6F8')
    expect(tree.children[2].children[0].children[0].children[0].children[0].children[0].children[0].props.fill).toEqual('#343A40')
})

it('add a vote to the list and color change after click and save in storage', () => {
    let tree = item.toJSON();
    renderer.act(() =>
        tree.children[1].props.onClick())
    tree = item.toJSON();
    renderer.act(() =>
        tree.children[2].children[0].children[1].children[0].props.onClick())
    tree = item.toJSON();
    renderer.act(() => tree.children[2].children[0].children[0].children[0].children[0].props.onClick())
    tree = item.toJSON();
    expect(localStorage.getItem('up-voter')).not.toBeNull()
    expect(localStorage.getItem('up-voter')).not.toEqual('[]')
})