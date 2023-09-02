import { Octokit } from 'octokit';

const octokit = new Octokit({
  // auth: process.env.REACT_APP_ACCESS_TOKEN,
});

export const getIssueList = async (data: { owner: string; repo: string; page: number }) => {
  const { owner, repo, page } = data;
  return await octokit.request(
    `GET /repos/${owner}/${repo}/issues?state=open&sort=comments&page=${page}`,
    {
      owner,
      repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );
};
