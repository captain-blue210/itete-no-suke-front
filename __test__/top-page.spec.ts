import Top from '@/pages/index.vue';
import { RouterLinkStub, shallowMount } from '@vue/test-utils';

describe('top-page', () => {
  it('should show link', () => {
    const wrapper = shallowMount(Top, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/user');
  });
});
