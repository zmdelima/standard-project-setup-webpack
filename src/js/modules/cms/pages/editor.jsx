import React from 'react';

export default (PageCtx, {page, mount}, {Components}) => {
  page('/editor', () => {
    mount(PageCtx,{
      content: (
        <CLLayout fixedHeader={true}>
          <CLHeader>
            <CLLogo label="CMS Editor" />
          </CLHeader>
          <CLDrawer>
          </CLDrawer>
          <CLBody>
            <CLGrid columns={2}>
              <CLForm onChangeDispatch={(data) => console.log(data)}>
                  <h1>Article Editor</h1>
                  <CLTextfield name="title" />
                  <CLMarkdownEditor name="body" rows={b}/>
              </CLForm>
            </CLGrid>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
