import renderer from 'react-test-renderer'
import VoteItem from './'

it('prop default gray icon', () => {
    const item = renderer.create(
        <VoteItem vote={0} />
    )
    let tree = item.toJSON();
    expect(tree.children[0].props.style.backgroundColor).toEqual('#F4F6F8')
    expect(tree.children[0].children[0].children[0].props.fill).toEqual('#343A40')
})
it('prop default blue icon', () => {
    const item = renderer.create(
        <VoteItem vote={1} />
    )
    let tree = item.toJSON();
    expect(tree.children[0].props.style.backgroundColor).toEqual('#E5E8FD')
    expect(tree.children[0].children[0].children[0].props.fill).toEqual('#253CF2')
})